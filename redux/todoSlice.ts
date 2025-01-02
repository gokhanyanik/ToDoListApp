import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface TodoState {
    showPicker: boolean;
    title: string;
    description: string;
    deadline: Date;
    email: string;
    password: number;
    isLoading: boolean;
    fulName: string;
    comfirmPassword: string;
    isPasswordVisible:boolean;
   

}

const initialState: TodoState = {
    title: '',
    description: '',
    showPicker: false,
    deadline: <Date>(new Date()),
    email: '',
    password: 0,
    isLoading: false,
    fulName: '',
    comfirmPassword: '',
    isPasswordVisible:false

}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setFulName: (state, action) => {
            state.fulName = action.payload
        },
        setComfirmPassword: (state, action) => {
            state.comfirmPassword = action.payload
        },
        setIsPasswordVisible:(state,action)=>{
            state.isPasswordVisible=action.payload
        },
        setTitle:(state,action)=>{
            state.title=action.payload
        },
        setDescription:(state,action)=>{
            state.description=action.payload
        },
        setDeadline:(state,action)=>{
            state.deadline=action.payload
        },
        setShowPicker:(state,action)=>{
            state.showPicker=action.payload
        }
    }

})


export const { setEmail, setPassword, setIsLoading, setFulName ,setComfirmPassword,setIsPasswordVisible,setTitle,setDescription,setDeadline,setShowPicker} = todoSlice.actions
export default todoSlice.reducer
