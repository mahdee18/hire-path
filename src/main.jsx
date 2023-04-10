import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Statistic from './components/Statistic/Statistic';
import Blog from './components/Blog/Blog';
import Appliedjobs from './components/AppliedJobs/Appliedjobs';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/",
        element:<Home></Home>
        
      },
      {
        path:"/statistics",
        element:<Statistic></Statistic>
      },
      {
        path:"/appliedJobs",
        element:<Appliedjobs></Appliedjobs>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
