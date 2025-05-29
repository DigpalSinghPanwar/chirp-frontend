import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('auth_token')    
        if (!token) {
            navigate("/")    
        }
    }, [])
    
    
  return (
    <>
    {children}
    </>
  )
}

export default ProtectedRoute