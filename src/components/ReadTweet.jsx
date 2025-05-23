import React from 'react'
import {  Heart, HeartHandshake,  MessageCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const ReadTweet = () => {
  return (
    <Card className="w-[600px] ">
      <CardHeader className='flex  items-center'>
      <img className='justify-end cursor-pointer w-8 h-8 rounded-full ' src="https://github.com/shadcn.png" alt='logo' />  
        <CardTitle>Digpal Singh</CardTitle>
        <CardDescription>1h ago</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
           <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex justify-around w-36">
        <div className='flex'>
          <Heart className='cursor-pointer'/>
          <p className='ml-2 '>0</p>
        </div>
        <div className='flex'>
        <HeartHandshake className='cursor-not-allowed'/>
        <p className='ml-2'>0</p>
        </div>

        <div className='flex'>
        <MessageCircle className='cursor-pointer'/>
        <p className='ml-2'>0</p>
        </div>
        </div>
      </CardFooter>
    </Card>
  )
}




export default ReadTweet