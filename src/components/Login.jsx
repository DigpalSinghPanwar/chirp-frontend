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
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

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
         <LoginForm/>
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
          <RegisterForm/>
         
            </Card>
      </TabsContent>
    </Tabs>
  )
}

export default Login


