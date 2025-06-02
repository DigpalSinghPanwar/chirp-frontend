import React, { useEffect } from 'react'
import  useGet  from '../hooks/useGet'

const Profile = () => {

    const { res, loading, error } = useGet('/users/profile')
  
     console.log(res)
 
  return (
    <div>Profile</div>
  )
}

export default Profile