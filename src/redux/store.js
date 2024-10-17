// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
    message: 'Hello, World!'
};

// Reducer function
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Create store
const store = createStore(messageReducer);

export default store;