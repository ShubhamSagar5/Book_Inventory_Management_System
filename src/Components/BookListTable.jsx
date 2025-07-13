import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteBook } from '../store/bookSlice'
import { toast } from 'react-toastify'

const BookListTable = () => {
  
  
       const books = useSelector((store)=>store?.booksData?.books)
    const navigate = useNavigate()  
    const dispatch = useDispatch() 

    const handleDelete = (bookId) => {
        dispatch(deleteBook(bookId))
        toast.success("Book Deleted")
    }

     useEffect(()=>{
        window.scrollTo(0,0) 
    
      },[])
  


    return books.length > 0 ?  (
         <div className='min-h-screen md:p-5'>
      <div className="overflow-x-auto"> 
      <table className='w-full text-center border border-gray-300'>
      <thead className='bg-gray-200 text-black'>
        <tr className='text-lg'>
           <th className="px-6 py-3 border">Title</th>
              <th className="px-6 py-3 border">Author</th>
              <th className="px-6 py-3 border">Stock</th>
              <th className="px-6 py-3 border">Actions</th>
        </tr>
      </thead> 
      <tbody>
        {
          books.map((book)=>{
            return (
              <tr key={book.id}>
                <td className="px-6 py-4 hover:cursor-pointer hover:bg-gray-200 hover:text-blue-600 font-semibold border" onClick={()=> navigate(`/detail/${book.id}`)}>{book.title}</td>
                <td className="px-6 py-4 border">{book.author}</td>
                <td className="px-6 py-4 border">{book.stocks}</td>
                <td className="px-6 py-4 border">
                  <div className='flex flex-col md:flex-row gap-2 justify-center'>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs hover:cursor-pointer" onClick={()=> navigate(`/edit/${book?.id}`)} >✏️ Edit</button> 
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs hover:cursor-pointer" onClick={() => handleDelete(book?.id)}>🗑️ Delete</button>
                  </div>
                </td>

              </tr>
            )
          })
        }
      </tbody>
    </table>
    </div>
   
   </div>
  ) : (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <h2 className="text-xl font-semibold text-gray-700 mb-2">No Books Available</h2>
    <p className="text-gray-500 mb-4">Please add a book to get started.</p>
  </div>
  )
}

export default BookListTable