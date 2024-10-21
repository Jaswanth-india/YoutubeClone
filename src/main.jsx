import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Components
import App from './App.jsx'
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ChannelDashboard from "./components/ChannelDashboard.jsx";
import VideoPage from "./components/VideoPage.jsx";

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
        path:"/channelDashboard",
        element:<ChannelDashboard/>
      },
      {
        path:"/videoPage/:id",
        element:<VideoPage/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
