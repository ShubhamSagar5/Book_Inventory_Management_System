import { createSlice } from "@reduxjs/toolkit";


const books = createSlice({
    name:"books",
    initialState:{
        books:[],
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
        },
        updateBookDetails: (state, action) => {
      const index = state.books.findIndex((book) => book.id === action.payload.id);
    // console.log(index)
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    }
    }
})

export const {addBooks,addSingleNewBook,deleteBook,getSingleBook,updateBookDetails} = books.actions
export default books.reducer