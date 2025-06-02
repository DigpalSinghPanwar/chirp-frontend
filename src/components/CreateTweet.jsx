import React from "react"
import { Calendar, Image, MapPin, Smile } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import {axiosInstance} from "../api/axios"

const CreateTweet = ({setReloadTweet, setLoading}) => {
      const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
    const onSubmit = (data) => {
      setLoading(true)
      axiosInstance.post('/tweet', data)
        .then((res) => {
            reset()
            setReloadTweet(true)
            setLoading(false) 
        })
        .catch((err) => {
            setLoading(false)
            setReloadTweet(false)
        })
    }
    return (
    <Card className="w-[600px] ">
      {/* <CardHeader>
        <CardTitle>What is on your mind?</CardTitle>
        <CardDescription>Share your thoughts with the world.</CardDescription>
      </CardHeader> */}
        <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Share your thoughts with the world.</Label>
              <Textarea id="description" placeholder="What is on your mind" {...register("description", { required: true}, {minLength: { value: 1} }  , {maxLength: { value: 280} } ) } />
            </div>
            {errors.description && <p className="text-red-500">Tweets must be between 1 and 280 characters.</p>}
          </div>
      </CardContent>
      <CardFooter className="flex justify-between ">
        {/* <Button variant="outline">Cancel</Button> */}
        <div className="flex justify-around w-36">
        <Image className='cursor-not-allowed'/>
        <Smile className='cursor-not-allowed'/>
        <Calendar className='cursor-not-allowed'/>
        <MapPin className='cursor-not-allowed'/>
        </div>
        <Button type="submit" className='bg-slate-500 mt-2 focus:outline-gray-500 hover:bg-black cursor-pointer'>Post</Button>
      </CardFooter>
        </form>
    </Card>
  )
}

export default CreateTweet