import { SignIn } from '../components/SignIn'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-[120vh] flex flex-col bg-slate-800 bg-gradient-to-br from-slate-700 to-slate-400'>
    <nav className='flex justify-between items-center m-0 py-4 px-8 shadow-2xl '> 
    <div className='flex'>
    <img className='justify-end cursor-pointer' src='' alt='logo' />  
    <p className='text-xl cursor-pointer text-amber-100 font-bold'>Chirp</p>
    </div>
    {/* <p className='text-xl cursor-pointer text-amber-100 font-bold'>Login</p> */}
    <SignIn />
    </nav>
    <div className='flex-1 flex flex-col items-center justify-center min-h-8/12  '> 
    <div className='flex flex-col items-center my-10 '>
     <h2 className='font-bold text-6xl text-amber-100'>Chirp</h2>
     <h2 className='font-bold text-6xl text-amber-100'>Social Media</h2>
    </div>
    <div className='flex flex-col items-center '>
     <h3 className='text-2xl text-gray-200 font-bold'>Have an Idea</h3>
     <h3 className='text-2xl text-gray-200 font-bold'>Share it here and get feedbacks and reviews</h3>
    </div>
    </div>
    <footer className="w-full bg-slate-600 text-gray-300 py-12 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold text-amber-100 mb-4">About Chirp</h4>
          <p className="text-sm">Share your thoughts and connect with people around the world.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold text-amber-100 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-100">Home</a></li>
            <li><a href="#" className="hover:text-amber-100">Explore</a></li>
            <li><a href="#" className="hover:text-amber-100">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold text-amber-100 mb-4">Connect</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-100">Twitter</a></li>
            <li><a href="#" className="hover:text-amber-100">Facebook</a></li>
            <li><a href="#" className="hover:text-amber-100">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        <p className="text-sm">&copy; {new Date().getFullYear()} Chirp. All rights reserved.</p>
      </div>
    </footer>
 </div>
  )
}
       


export default Home



// <div className= 'h-svh bg-slate-800 bg-gradient-to-br from-slate-700 to-slate-400 '>
// <nav className='flex justify-between items-center m-0 py-4 px-8 shadow-2xl '> 
// <div className='flex'>
// <img className='justify-end cursor-pointer' src='' alt='logo' />  
// <p className='text-xl cursor-pointer text-amber-100 font-bold'>Chirp</p>
// </div>
// {/* <p className='text-xl cursor-pointer text-amber-100 font-bold'>Login</p> */}
// <SignIn />
// </nav>
// <div className=' min-h-8/12 flex flex-col items-center justify-center'> 
// <div className='flex flex-col items-center my-10 '>
//  <h2 className='font-bold text-6xl text-amber-100'>Chirp</h2>
//  <h2 className='font-bold text-6xl text-amber-100'>Social Media</h2>
// </div>
// <div className='flex flex-col items-center '>
//  <h3 className='text-2xl text-gray-200 font-bold'>Have an Idea</h3>
//  <h3 className='text-2xl text-gray-200 font-bold'>Share it here and get feedbacks and reviews</h3>
// </div>
 
// </div>
// </div>