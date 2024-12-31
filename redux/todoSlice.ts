import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface TodoState {
    showPicker: boolean
    title: string;
    description: string;
    deadline: Date;
    email: string;
    password: number;
    isLoading:boolean;
}

const initialState: TodoState = {
    title: '',
    description: '',
    showPicker: false,
    deadline: <Date>(new Date()),
    email: '',
    password:0,
    isLoading: false,
}


export const todoSlice=createSlice({
name:'todo',
initialState,
reducers:{
    setTitle:(state,action)=>{
        state.title=action.payload
    }
}

})


export const {setTitle} = todoSlice.actions
export default todoSlice.reducer
