import { configureStore } from "@reduxjs/toolkit";
import bookSliceReducer from './bookSlice'

const appStore = configureStore({
    reducer:{
        books:bookSliceReducer
    }
})

export default appStore