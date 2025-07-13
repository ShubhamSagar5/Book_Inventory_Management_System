import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './Components/Body'
import FeedPage from './Components/FeedPage'
import AddBookPage from './Components/AddBookPage'
import DetailPage from './Components/DetailPage'
import { Provider } from 'react-redux'
import appStore from './store/appStore'
import EditBookPage from './Components/EditBookPage'
  import { ToastContainer } from 'react-toastify';


function App() {
  
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<FeedPage/>
        },
        {
          path:"/detail/:bookId",
          element:<DetailPage/>
        },
        {
          path:"/addNewBook",
          element:<AddBookPage/>
        },
        {
          path:"/edit/:bookId",
          element:<EditBookPage/>
        }
      ]
    }
  ])


  return (
    <> 
    <Provider store={appStore}>
    <RouterProvider router={appRouter}/>
    <ToastContainer position="top-center" autoClose={2000}/>
    </Provider>
    </>
  )
}

export default App
