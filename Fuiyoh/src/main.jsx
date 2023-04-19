import React from 'react'
import ReactDOM from 'react-dom/client'
import AddActivity from './assets/Component/AddActivity/AddActivity'
import Dashboard from './assets/Component/Dashboard/Dashboard'
import Home from './assets/Component/Home/Home'
import Login from './assets/Component/Login/Login'
import Register from './assets/Component/Register/Register'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/AddActivity',
    element: <AddActivity />
  },
  {
    path: '/Dashboard',
    element: <Dashboard />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Register',
    element: <Register />
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
