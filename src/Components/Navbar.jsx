import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  const navigate = useNavigate()

  return (
    <div className="bg-blue-900 text-white px-6 py-4 shadow sticky top-0">
    <div className='flex justify-between'>
  <span className="text-xl font-semibold hover:cursor-pointer" onClick={()=> navigate("/")}>📚 Book Inventory</span>
  <span className="text-xl font-semibold hover:cursor-pointer" onClick={()=>navigate("/addNewBook")}>➕ AddBook</span>

    </div>
    </div>
  )
} 

export default Navbar