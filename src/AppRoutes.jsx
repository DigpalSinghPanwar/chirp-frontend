import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AuthLayout from './pages/AuthLayout';
import Profile from './pages/Profile';

const AppRoutes = () => {
  return (
   <RouterProvider router={router} />
  )
}

let router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      { index: true, Component: Home },
      // { path: "abou", Component: About },
      
      // {
      //   path: "concerts",
      //   children: [
      //     { index: true, Component: ConcertsHome },
      //     { path: ":city", Component: ConcertsCity },
      //     { path: "trending", Component: ConcertsTrending },
      //   ],
      // },
    ],
  },
  {
   
    element:  <AuthLayout/>,
    children: [
      { index: true, path: 'dashboard', Component:  Dashboard },
      { path: "profile", Component: Profile },
      // { path: "register", Component: Register }, 
    ],
  },

]);

export default AppRoutes