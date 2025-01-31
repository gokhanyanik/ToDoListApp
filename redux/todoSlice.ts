import { createSlice } from '@reduxjs/toolkit'

export interface Todo {
    id: number;
    title: string;
    description: string;
    deadline: string;
};
export interface TodoApp {
    todos: Todo[];
    fullName: string;
    email: string;
    password: string;
    id: number | null;
};
const initialState: TodoApp = {
    todos: [],
    fullName: '',
    email: '',
    password: '',
    id: null
};
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload
        },
        setFullName: (state, action) => {
            state.fullName = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
    }
})

export const { setTodos, setFullName, setEmail, setPassword } = todoSlice.actions
export default todoSlice.reducer
