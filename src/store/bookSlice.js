import { createSlice } from "@reduxjs/toolkit";


const books = createSlice({
    name:"books",
    initialState:{
        books:[]
    },
    reducers:{
        addBooks:(state,action)=>{
            state.books = action.payload
        },
        addSingleNewBook :(state,action)=>{
            state.books.push(action.payload)
        },
        deleteBook : (state,action)=>{
            let newUpdatedData = state.books.filter((book)=> book?.id !== action.payload) 
            state.books = newUpdatedData
        }
    }
})

export const {addBooks,addSingleNewBook,deleteBook} = books.actions
export default books.reducer