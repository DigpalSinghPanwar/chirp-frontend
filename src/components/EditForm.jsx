import React from 'react'
import { CardContent, CardFooter } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { axiosInstance } from '../api/axios'
import { useNavigate } from 'react-router-dom'

const EditForm = ({username,email,about,id,setOpen,onSuccess}) => {
    console.log(id)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleEditSubmit = handleSubmit((data) => {
        console.log(data)
        axiosInstance.put(`/users/${id}`, data)
        .then((res) => {    
            console.log(res)
            setOpen(false)
            onSuccess?.()
        })
        .catch((err) => {
            console.log(err)
            setOpen(false)
        })
    })
  return (
    <form onSubmit={handleEditSubmit}>
    <CardContent className="space-y-2">
    <div className="space-y-1">
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" defaultValue={username} {...register("username", { required: true, minLength: 8, maxLength: 16})}/>
        {/* <input type="email" {...register("email", { required: true })}/> */}
      </div>
      {errors.username && <p className="text-red-500">Username should be between 8 and 16 characters.</p>}
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" defaultValue={email} {...register("email", { required: true})}/>
        {/* <input type="email" {...register("email", { required: true })}/> */}
      </div>
      {errors.email && <p className="text-red-500">Please enter a valid email address.</p>}
      <div className="space-y-1">
        <Label htmlFor="about">About</Label>
        <Input id="about" type="text" defaultValue={about} {...register("about", { required: true})}/>
        {/* <input type="password" {...register("password", { required: true})}/> */}
      </div>
      {errors.about && <p className="text-red-500">About should be between 0 and 150 characters.</p>}
    </CardContent>
    <CardFooter >  
      <Button type='submit'  className='w-full mt-2'>Edit</Button>
    </CardFooter>
    </form>
  )
}

export default EditForm