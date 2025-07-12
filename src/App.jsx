import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './Components/Body'
import FeedPage from './Components/FeedPage'
import AddEditPage from './Components/AddEditPage'
import DetailPage from './Components/DetailPage'
import { Provider } from 'react-redux'
import appStore from './store/appStore'

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
          path:"/deatil/:id",
          element:<DetailPage/>
        },
        {
          path:"/addEdit/:id",
          element:<AddEditPage/>
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
