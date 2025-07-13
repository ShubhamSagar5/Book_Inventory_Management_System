import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  const navigate = useNavigate()

  return (
    <div className="bg-blue-900 text-white px-6 py-3 shadow sticky top-0">
    <div className='flex justify-between'>
  <span className="text-xl font-semibold hover:cursor-pointer bg-blue-950 p-2 rounded-lg" onClick={()=> navigate("/")}>📚 Book Inventory</span>
  <span className="text-xl font-semibold hover:cursor-pointer bg-blue-950 p-2 rounded-lg" onClick={()=>navigate("/addNewBook")}>➕ AddBook</span>

    </div>
    </div>
  )
} 

export default Navbar