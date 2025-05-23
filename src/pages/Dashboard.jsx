import React from 'react'
import CreateTweet from '../components/CreateTweet'
import ReadTweet from '../components/ReadTweet'

const Dashboard = () => {
  return (
    <div>
    <div>
        <CreateTweet/>
    </div>
    <div className='my-4'>
        <ReadTweet/>
    </div>
    </div>
  )
}

export default Dashboard