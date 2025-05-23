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
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

const CreateTweet = () => {
  return (
    <Card className="w-[600px] ">
      {/* <CardHeader>
        <CardTitle>What is on your mind?</CardTitle>
        <CardDescription>Share your thoughts with the world.</CardDescription>
      </CardHeader> */}
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Share your thoughts with the world.</Label>
              <Textarea id="name" placeholder="What is on your mind" />
            </div>
            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button> */}
        <div className="flex justify-around w-36">
        <Image className='cursor-not-allowed'/>
        <Smile className='cursor-not-allowed'/>
        <Calendar className='cursor-not-allowed'/>
        <MapPin className='cursor-not-allowed'/>
        </div>
        <Button className='bg-slate-500 hover:bg-black cursor-not-allowed'>Post</Button>
      </CardFooter>
    </Card>
  )
}

export default CreateTweet