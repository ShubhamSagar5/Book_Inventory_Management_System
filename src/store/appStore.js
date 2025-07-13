import { configureStore } from "@reduxjs/toolkit";
import bookSliceReducer from './bookSlice'

const appStore = configureStore({
    reducer:{
        booksData:bookSliceReducer
    }
})

export default appStore