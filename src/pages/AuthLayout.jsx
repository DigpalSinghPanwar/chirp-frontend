import React from 'react'
// components/AuthLayout.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/AppSidebar';


const isAuthenticated = () => {
  // Your logic here: check localStorage/token/auth context
  return localStorage.getItem("token"); // or however you store auth
};

const AuthLayout = ({children}) => {
  const location = useLocation();
//   if (!isAuthenticated()) {
//     return <Navigate to="/" replace />;
//   }
  return (
    <div className='flex  bg-slate-400 bg-gradient-to-br from-slate-700 to-slate-400'>
    <div className='w-[16rem]'>

    <SidebarProvider  style={{
    "--sidebar-width": "16rem",
    // "--sidebar-width-mobile": "30rem",
  }}>
      <AppSidebar/>
      <main >
        {/* {children} */}
        {/* <h3>hijkb</h3> */}
        {/* <SidebarTrigger /> */}
      </main>
    </SidebarProvider>
    </div>
    <div className='w-[calc(100%-16rem)]'>
    {/* <nav className='flex justify-between items-center m-0 py-4 px-8 shadow-2xl '> 
        <div className='flex'>
        <img className='justify-end cursor-pointer' src='' alt='logo' />  
        <p className='text-xl cursor-pointer text-amber-100 font-bold'>Chirp</p>
        </div> */}
        {/* <p className='text-xl cursor-pointer text-amber-100 font-bold'>Login</p> */}
        {/* <SignIn /> */}
        {/* </nav> */}
        <div className='py-4 px-10'>
        <Outlet className='w-[calc(100%-16rem)] ' />
        </div>
    </div>
    </div>
  );
}

export default AuthLayout