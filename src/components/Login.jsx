import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useForm } from "react-hook-form"

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLoginSubmit = handleSubmit((data) => {
        console.log(data)
    })
    const handleRegisterSubmit = handleSubmit((data) => {
        console.log(data)
    })
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login to your account.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLoginSubmit()}>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }) }/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password", { required: true, minLength: 8, maxLength: 16 })}/>
            </div>
          </CardContent>
          <CardFooter >  
            <Button type='submit' className='w-full mt-2'> Login</Button>
          </CardFooter>
          </form>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Create a new account.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleRegisterSubmit()}>
          <CardContent className="space-y-2">
          <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" {...register("username", { required: true, minLength: 8, maxLength: 16 })}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password", { required: true, minLength: 8, maxLength: 16 })}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" {...register("passwordConfirm", { required: true, minLength: 8, maxLength: 16 })}/>
            </div>
          </CardContent>
          <CardFooter >
            <Button type='submit' className='w-full mt-2'>Register</Button>
          </CardFooter>     
          </form>
            </Card>
      </TabsContent>
    </Tabs>
  )
}

export default Login