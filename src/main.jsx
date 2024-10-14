import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Components
import App from './App.jsx'
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import CreateChannel from "./components/CreateChannel.jsx";
import ChannelDashboard from "./components/ChannelDashboard.jsx";

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<></>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"createChannel",
        element:<CreateChannel/>
      },
      {
        path:"channelDashboard",
        element:<ChannelDashboard/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
