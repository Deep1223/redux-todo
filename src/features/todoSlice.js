import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoData: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoData.push(action.payload);
        },
        editTodo: (state, action) => {
            const index = state.todoData.findIndex(todo => todo.id === action.payload.id);
            if (index >= 0) {
                state.todoData[index] = action.payload;
            }
        },
        deleteTodo: (state, action) => {
            state.todoData = state.todoData.filter(todo => todo.id !== action.payload);
        },
        setTodos: (state, action) => {
            state.todoData = action.payload;
        },
    },
});

export const { addTodo, editTodo, deleteTodo, setTodos } = todoSlice.actions;

export default todoSlice.reducer;
