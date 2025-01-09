import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
    id: number;
    title: string;
    description: string;
    deadline: Date;
};
export interface TodoApp {

    todos: Todo[];

}

const initialState: TodoApp = {
    todos: []

}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        setTodos: (state, action) => {
            state.todos = action.payload
        }
    }
})


export const { setTodos } = todoSlice.actions
export default todoSlice.reducer
