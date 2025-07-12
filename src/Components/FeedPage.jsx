import React from 'react'
import { useState } from 'react';

const FeedPage = () => {
   const [books, setBooks] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      isbn: "9780735211292",
      stock: 8,
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      isbn: "9780062315007",
      stock: 5,
    },
    {
      id: 3,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      isbn: "9781612680194",
      stock: 10,
    },
     {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      isbn: "9780735211292",
      stock: 8,
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      isbn: "9780062315007",
      stock: 5,
    },
    {
      id: 3,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      isbn: "9781612680194",
      stock: 10,
    },
     {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      isbn: "9780735211292",
      stock: 8,
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      isbn: "9780062315007",
      stock: 5,
    },
    {
      id: 3,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      isbn: "9781612680194",
      stock: 10,
    },
     {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      isbn: "9780735211292",
      stock: 8,
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      isbn: "9780062315007",
      stock: 5,
    },
    {
      id: 3,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      isbn: "9781612680194",
      stock: 10,
    },
     {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      isbn: "9780735211292",
      stock: 8,
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      isbn: "9780062315007",
      stock: 5,
    },
    {
      id: 3,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      isbn: "9781612680194",
      stock: 10,
    },

  ]);



  return (
  
      <div className='min-h-screen p-5'>
      <div className="overflow-x-auto"> 
      <table className='w-full text-center border border-gray-300'>
      <thead className='bg-gray-200 text-black'>
        <tr className='text-lg'>
           <th className="px-6 py-3 border">Title</th>
              <th className="px-6 py-3 border">Author</th>
              <th className="px-6 py-3 border">ISBN</th>
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
                <td className="px-6 py-4 border">{book.isbn}</td>
                <td className="px-6 py-4 border">{book.stock}</td>
                <td className="px-6 py-4 border">
                  <div className='flex flex-col md:flex-row gap-2 justify-center'>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs hover:cursor-pointer">✏️ Edit</button> 
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs hover:cursor-pointer">🗑️ Delete</button>
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