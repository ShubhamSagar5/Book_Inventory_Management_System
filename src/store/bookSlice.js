import { createSlice } from "@reduxjs/toolkit";


const books = createSlice({
    name:"books",
    initialState:{
        books:[]
    },
    reducers:{
        addBook:(state,action)=>{
            state.books = action.payload
        }
    }
})

export const {addBook} = books.actions
export default books.reducer