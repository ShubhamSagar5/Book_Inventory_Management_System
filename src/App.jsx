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
          path:"/detail/:id",
          element:<DetailPage/>
        },
        {
          path:"/addNewBook",
          element:<AddBookPage/>
        },
        {
          path:"/edit/:id",
          element:<EditBookPage/>
        }
      ]
    }
  ])


  return (
    <> 
    <Provider store={appStore}>
    <RouterProvider router={appRouter}/>

    </Provider>
    </>
  )
}

export default App
