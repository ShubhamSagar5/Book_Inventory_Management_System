import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import bookData from '../utility/booksData'
import { useDispatch } from 'react-redux';
import { addBooks } from '../store/bookSlice'


const Body = () => {
  
    const dispatch =  useDispatch()


       const addBookDataToStore = () => {
    dispatch(addBooks(bookData))
  }

  

useEffect(()=>{
  addBookDataToStore()
},[])
  
  return (
    <div className='w-full'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body