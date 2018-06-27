import uuidv4 from 'uuid/v4';

// type
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

// action creator

export const createPost = ({title, body}) => ({
    type: ADD_POST,
    payload: {
        id: uuidv4(),
        title,
        body
    }
});


export const deletePost = id => ({
    type: DELETE_POST,
    payload: {
        id
    }
})
