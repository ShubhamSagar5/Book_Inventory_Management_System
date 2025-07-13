import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import bookData from '../utility/booksData';
import { addBooks } from '../store/bookSlice';
import { useNavigate } from 'react-router-dom';
const FeedPage = () => {

   const [books, setBooks] = useState([])
   const navigate = useNavigate()


  return (
  
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
              <tr>
                <td className="px-6 py-4 hover:cursor-pointer hover:bg-gray-200 hover:text-blue-600 font-semibold border">{book.title}</td>
                <td className="px-6 py-4 border">{book.author}</td>
                <td className="px-6 py-4 border">{book.stock}</td>
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
 
   
  );
};


export default FeedPage