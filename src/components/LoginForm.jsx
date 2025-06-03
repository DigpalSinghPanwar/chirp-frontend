import React from 'react'
import { CardContent, CardFooter } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { axiosLoginInstance } from '../api/axios'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLoginSubmit = handleSubmit((data) => {
        axiosLoginInstance.post('users/signin', data)
        .then((res) => {
            console.log(res)
            localStorage.setItem('auth_token', res.data.token)
            localStorage.setItem('user_id', res.data.data.user._id)
           navigate('/dashboard')
        })
        .catch((err) => {
            console.log(err)
        })
    })
  return (
    <form onSubmit={handleLoginSubmit}>
    <CardContent className="space-y-2">
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email", { required: true})}/>
        {/* <input type="email" {...register("email", { required: true })}/> */}
      </div>
      {errors.email && <p className="text-red-500">Please enter a valid email address.</p>}
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password", { required: true, minLength: 8, maxLength: 16 })}/>
        {/* <input type="password" {...register("password", { required: true})}/> */}
      </div>
      {errors.password && <p className="text-red-500">Please enter a valid password.</p>}
    </CardContent>
    <CardFooter >  
      <Button type='submit'  className='w-full mt-2'>Login</Button>
    </CardFooter>
    </form>
  )
}

export default LoginForm