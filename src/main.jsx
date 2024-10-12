import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from './App.jsx'
import CreateChannel from "./components/CreateChannel.jsx";

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<></>,
    children:[
      {
        path:"/",
        element:<></>,
      },
      {
        path:"/login",
        element:<></>,
      },
      {
        path:"/register",
        element:<></>
      },
      {
        path:"createChannel",
        element:<CreateChannel/>
      },
      {
        path:"channelDashboard",
        element:<></>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
