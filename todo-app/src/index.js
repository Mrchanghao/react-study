import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import {createLogger} from 'redux-logger';
import {schema, normalize} from 'normalizr';
import registerServiceWorker from './registerServiceWorker';


// 액션 타입
const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const FILTER_SET = 'FILTER_SET';

// reducer
const todos = [
    {id: 0, name: 'redux 공부'},
    {id: 1, name: 'javascript 공부'},
    {id: 2, name: 'javascript 공부'},
    {id: 3, name: 'dyfl 공부'},
    {id: 4, name: 'javascript 공부'},
    {id: 5, name: 'javascript 공부'},
    {id: 6, name: 'x 공부'},
    {id: 7, name: 'react 공부'},
    {id: 8, name: 'vue 공부'},
    {id: 9, name: 'javascript 공부'},
    {id: 10, name: 'javascript 공부'},
]

// schemas
const todoSchema = new schema.Entity('todo')

// 노말라이져
const normalizedTodos = normalize(todos, [todoSchema]);
const initialTodoState = {
    entities: normalizedTodos.entities.todo,
    ids: normalizedTodos.result
}

console.log(normalizedTodos)

const todoReducer = (state = todos, action) => {
    switch(action.type) {
        case TODO_ADD: {
            return applyAddTodo(state, action);
        }
        case TODO_TOGGLE: {
            return applyToggleTodo(state, action);
        }
        default: return state;
    }
}

function applyAddTodo(state, action) {
    const todo = {...action.todo, completed: false};
    const entities = {...state.entities, [todo.id]: todo}
    const ids = [...state.ids, action.todo.id]
    return [...state, entities, ids];
}

function applyToggleTodo(state, action) {
    const id = action.todo.id;
    const todo = state.entities[id]
    const toggleTodo = {...todo, completed: !todo.completed};
    const entities ={...state.entities, [id]: toggleTodo }
    return {
        ...state, entities
    }
}

function filterReducer(state = 'SHOW_ALL', action) {
    switch(action.type) {
        case FILTER_SET: {
            return applySetFiler(state, action);
        }
        default: return state;
    }
}

function applySetFiler(state, action) {
    return action.filter;
}

// action creators;
function doAddTodo(id, name) {
    return {
        type: TODO_ADD,
        todo: {id, name}
    }
}

function doToggleTodo(id) {
    return {
        type: TODO_TOGGLE,
        todo: {id}
    }
}

function doSetFiler(filter) {
    return {
        type: FILTER_SET,
        filter
    }
}


// store 
const rootReducer = combineReducers({
    todoState: todoReducer,
    filterState: filterReducer
});

const logger = createLogger();
const store = createStore(rootReducer, undefined, applyMiddleware(logger))
// 컴포넌트

const TodoApp = ({todos, onToggleTodo}) => {
    return (
        // <TodoList todos={todos} onToggleTodo={onToggleTodo} />
        <ConnectedTodoList/>
    )
}

function TodoList ({todos, onToggleTodo}) {
    return (
        // <div>
        //     {todos.map((todo)=> 
        //  <ConnectedTodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
        //     )}
        // </div>
        <div>
      {todosAsIds.map(todoId => <ConnectedTodoItem
        key={todoId}
        todoId={todoId}
      />)}
    </div>
    )
}

const TodoItem = ({todo, onToggleTodo}) => {
    const {name, id, completed} = todo;
    return (
        <div>
            {name}
            <button type='button' onClick={()=> onToggleTodo(id)}>
                {completed ? 'Incompleted' : 'Completed'}
            </button>
        </div>
    )
}

function mapStateToPropsList(state) {
    return {
      todosAsIds: state.todoState.ids,
    };
  }
  
  function mapStateToPropsItem(state, props) {
    return {
       todo: state.todoState.entities[props.todoId],
    };
  }
  
  function mapDispatchToPropsItem(dispatch) {
    return {
       onToggleTodo: id => dispatch(doToggleTodo(id)),
    };
  }
  
  const ConnectedTodoList = connect(mapStateToPropsList)(TodoList);
  const ConnectedTodoItem = connect(mapStateToPropsItem, mapDispatchToPropsItem)(TodoItem);
  


    ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>, document.getElementById('root'));

registerServiceWorker();

// 248 페이지까지 코딩
