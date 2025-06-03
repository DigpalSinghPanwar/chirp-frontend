import React, { useEffect } from 'react'
import  useGet  from '../hooks/useGet'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import EditForm from '../components/EditForm'
import Loader from '../components/Loader'

const Profile = () => {

    const [open, setOpen] = React.useState(false)

    const userId = localStorage.getItem('user_id')
    const { res, loading, error, refetch } = useGet(`/users/${userId}`)
    const user = res?.data?.data?.userDetails
     console.log(res)
     console.log(user)
     const dateFromString = new Date(user?.createdAt)
     const formattedDate = dateFromString.toLocaleDateString()
     if (loading) return  (

       <Card className="w-full max-w-xl mt-10">
     
     <Loader/>
     </Card>
      )
     if (error) return <p>Error: {error.message}</p>  
  return (
    <Card className="w-full max-w-xl mt-10">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent>
      <Table>
      {/* <TableHeader>
        <TableRow>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader> */}
      <TableBody>
      <TableRow key={user?.username}>
      <TableHead>Username</TableHead>
            <TableCell className="font-medium">{user?.username}</TableCell>
          </TableRow>
          <TableRow key={user?.email}>
          <TableHead>Email</TableHead>
            <TableCell>{user?.email}</TableCell>
          </TableRow>
          <TableRow key={user?.createdAt}>
          <TableHead>Joined On</TableHead>
            <TableCell>{formattedDate}</TableCell>
          </TableRow>
          <TableRow>

         {user?.about && <>
         <TableHead>About</TableHead>
            <TableCell>{user?.about}</TableCell>
            </>}
          </TableRow>
            {/* <TableCell className="text-right">{user.totalAmount}</TableCell> */}
      </TableBody>
      </Table>
      </CardContent>
      <CardFooter className="flex-col gap-2">
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
      <DialogHeader>
          <DialogTitle>Welcome to chirp</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <EditForm username={user?.username} email={user?.email} about={user?.about} id={userId} setOpen={setOpen} onSuccess={() => refetch()} />
      </DialogContent>
      
    </Dialog>
      </CardFooter>
    </Card>
  )
}

export default Profile
