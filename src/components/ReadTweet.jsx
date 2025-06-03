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
import {axiosInstance}   from '@/api/axios';



const ReadTweet = ({tweet}) => {
  console.log(tweet)
  const [likeCount, setLikeCount] = React.useState(tweet?.likeCount)
  // const   {username, about, createdAt, description, commentCount, likeCount} = tweet
  const dateFromString = new Date(tweet?.createdAt)
  const formattedDate = dateFromString.toLocaleDateString()
  // console.log(dateFromSt ring)
  // console.log(formattedDate)
  const handleLike = async (tweetId) => {
    console.log(tweetId)
    const res = await axiosInstance.get(`/tweet/${tweetId}/like`)
    console.log(res)
    if(res) {
      console.log("like")
      setLikeCount(res?.data?.totalLikes)
    }
  }
  return (
    // <h1>hi</h1>
    <Card className="w-[600px] my-4">
    <CardHeader className='flex  items-center'>
    <img className='justify-end cursor-pointer w-8 h-8 rounded-full ' src="https://github.com/shadcn.png" alt='logo' />  
      <CardTitle>{tweet?.username}</CardTitle>
      <CardDescription>{formattedDate}</CardDescription>
    </CardHeader>
    <CardContent>
        <div className="grid w-full items-center gap-4">
         <p>{tweet?.description}</p>
        </div>
    </CardContent>
    <CardFooter className="flex justify-between">
    <div className="flex justify-around w-24">
    <div className='flex'>
      <Heart className='cursor-pointer' onClick={() => handleLike(tweet._id)} />
      <p className='ml-2 '>{likeCount}</p>
    </div>
    {/* <div className='flex'>
    <HeartHandshake className='cursor-not-allowed'/>
    <p className='ml-2'>{tweet?.likeCount}</p>
    </div> */}

    <div className='flex'>
        <MessageCircle className='cursor-pointer'/>
    <p className='ml-2'>{tweet?.commentCount}</p>
    </div>
    </div>
    </CardFooter>
    </Card>
  )
}




export default ReadTweet