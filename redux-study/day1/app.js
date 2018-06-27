// 리듀서 정의
function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT': 
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default: 
            return state;
    }
}

const store = Redux.createStore(counter);

const value = document.getElementById('counter');

function render() {
    value.textContent = store.getState().toString()
}
render();
store.subscribe(render)

const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
increment.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})

decrement.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'})
})

const incrementIfOdd = document.getElementById('incrementIfOdd');

incrementIfOdd.addEventListener('click', () => {
    if(store.getState() % 2 !== 0) {
        store.dispatch({type: 'INCREMENT'})
    }
})

const AysncIncrement = document.getElementById('AysncIncrement');
AysncIncrement.addEventListener('click', () => {
    setTimeout(() => {
        store.dispatch({type: 'INCREMENT'})
    }, 2000)
})