import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  
  const {bookId} = useParams() 
  // console.log(bookId)
  const getAllBooks = useSelector((store) =>store.booksData?.books)
  const [book] = getAllBooks.filter((book)=>book.id ==bookId)
  // console.log(book)
  
  useEffect(()=>{
    window.scrollTo(0,0) 

  },[])
  return (
    <div className='min-h-screen'>
     <h1 className='text-2xl font-bold text-center mt-3'>Book Detail Info</h1>
 <div className="bg-white shadow-md rounded-2xl p-4 w-full sm:w-[400px]  mx-auto hover:shadow-lg mt-20">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h2>
      <p className="text-lg text-gray-700 mb-1">👤 {book.author}</p>
      <p className="text-sm text-gray-700 mb-1">🏢 {book.publisher}</p>
      <p className="text-sm text-gray-700 mb-2">📅 {book.published_date}</p>
      <p className="text-sm text-gray-700 mb-2">{book.overview}...</p>

      <div className="flex justify-between items-center text-md mt-4">
        <span className="text-blue-600 font-bold">₹{book.price}</span>
        <span className="text-gray-600">{book.stocks} in stock</span>
      </div>
    </div>
    </div>
    
  )
}

export default DetailPage