import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleBook, updateBookDetails } from '../store/bookSlice'

const EditBookPage = () => {
  
  const {bookId} = useParams()
  const dispatch = useDispatch()
  const getAllBooks = useSelector((store)=>store.booksData?.books) 
    const getBook = getAllBooks.filter((book)=>book.id == bookId)
  console.log(getBook[0])


 
  

   const [bookDetails,setBookDetails] = useState({
      title:getBook[0]?.title,
      author:getBook[0]?.author,
      publisher:getBook[0]?.publisher,
      overview:getBook[0]?.overview,
      stocks:getBook[0]?.stocks,
      price:getBook[0]?.price,
      published_date:getBook[0]?.published_date
  
    })

    

    const handleData = (e) => {
    setBookDetails((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  
  const handleUpdateBook = () => {
    let newBook = {
      ...bookDetails,
      id:bookId
    }
    dispatch(updateBookDetails(newBook))
    console.log(newBook)
  }

  
  return (
    
    <div className="min-h-screen">
    <h3 className=" text-2xl font-bold text-center mt-3">Update Book Details</h3>
       <div className="flex justify-center p-2 md:p-10">
  <div className="border border-black w-full md:w-6/12 rounded-lg p-6 space-y-4 bg-white">
    <div>
      <label htmlFor="title" className="font-medium mb-1">Title</label>
      <input type="text" name="title" id="title" onChange={handleData} value={bookDetails.title} className="w-full border border-gray-300 rounded px-3 py-2" />
    </div>

    <div>
      <label htmlFor="author" className="font-medium mb-1">Author</label>
      <input type="text" name="author" id="author" onChange={handleData} value={bookDetails.author} className="w-full border border-gray-300 rounded px-3 py-2" />
    </div>

    <div>
      <label htmlFor="publisher" className="font-medium mb-1">Publisher</label>
      <input type="text" name="publisher" id="publisher" onChange={handleData} value={bookDetails.publisher} className="w-full border border-gray-300 rounded px-3 py-2" />
    </div>

    <div>
      <label htmlFor="overview" className="font-medium mb-1">Overview</label>
      <input type="text" name="overview" id="overview" onChange={handleData} value={bookDetails.overview} className="w-full border border-gray-300 rounded px-3 py-2" />
    </div>

    <div className="md:flex md:justify-between">
       <div className="w-full md:w-5/12">
      <label htmlFor="stocks" className="font-medium mb-1">Stocks</label>
      <input type="number" name="stocks" id="stocks" onChange={handleData} value={bookDetails.stocks} className="w-full border border-gray-300 rounded px-3 py-2" />
    </div>

    <div className="w-full md:w-5/12">
      <label htmlFor="price" className="font-medium mb-1">Price</label>
      <input type="number" name="price" id="price" onChange={handleData} value={bookDetails.price} className="w-full border border-gray-300 rounded px-3 py-2" />
    </div>
    </div>
   
    <div>

    </div>

   <div className="md:flex md:justify-between md:items-center">
  <div className="w-full md:w-5/12">
    <label htmlFor="published_date" className="font-medium mb-1">Published Date</label>
    <input
      type="date"
      name="published_date"
      id="published_date"
      className="w-full border border-gray-300 rounded px-3 py-2"
      onChange={handleData} value={bookDetails.published_date}
    />
  </div>
<div className="w-full  md:w-5/12">
  <button className="bg-blue-600 mt-5 w-full text-white font-semibold px-4 py-2 rounded hover:bg-blue-700" onClick={handleUpdateBook} >
    Update Book Details
  </button>
</div>
  
</div>


  
  </div>
</div>
    </div>
  )
}

export default EditBookPage