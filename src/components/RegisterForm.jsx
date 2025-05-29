import React from 'react'
import { CardContent, CardFooter } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { axiosLoginInstance } from '../api/axios'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegisterSubmit = handleSubmit((data) => {
        axiosLoginInstance.post('users/signup', data)
        .then((res) => {
            console.log(res)
            localStorage.setItem('auth_token', res.data.token)
           navigate('/dashboard')
        })
        .catch((err) => {
            console.log(err)
        })
        console.log(data)
    })
  return (
         <form onSubmit={handleRegisterSubmit}>
          <CardContent className="space-y-2">
          <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" {...register("username", { required: true, minLength: 8, maxLength: 16 })}/>
            </div>
            {errors.username && <p className="text-red-500">Please enter a valid username.</p>}
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email", { required: true})}/>
            </div>
            {errors.email && <p className="text-red-500">Please enter a valid email address.</p>}
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password", { required: true, minLength: 8, maxLength: 16 })}/>
            </div>
            {errors.password && <p className="text-red-500">Please enter a valid password.</p>}
            <div className="space-y-1">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" {...register("passwordConfirm", { required: true, minLength: 8, maxLength: 16 })}/>
            </div>
            {errors.passwordConfirm && <p className="text-red-500">Please enter a valid password.</p>}
          </CardContent>
          <CardFooter >
            <Button type='submit' className='w-full mt-2'>Register</Button>
          </CardFooter>     
          </form> 
  )
}

export default RegisterForm