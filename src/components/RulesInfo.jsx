import React from 'react'

const RulesInfo = () => {
  return (
    <div className='w-[200px] ml-4 px-8 relative '>
{/* <div> */}
  <div className='w-[500px]  fixed  top-16 right-12'>
      <div className='border-2 rounded-lg p-4 px-8'>
        <p className='text-xl font-bold text-amber-100'>Make sure to follow our rules</p>
        <ul className='ml-8  list-disc text-gray-200'>
          <li>Be kind</li>
          <li>Be respectful</li>
          <li>Be honest</li>
          <li>Be true</li>
          <li>Be yourself</li>
        </ul>
      </div>
      <div className='border-2 rounded-lg my-2 py-2 px-8'>

        <p className='text-xl  font-bold text-amber-100'>Profile Section</p>
        <ul className='ml-8  list-disc text-gray-200'>
          <li>See your profile</li>
          <li>Make changes to your profile</li>
        </ul>
                
        <p className='text-xl mt-2 font-bold text-amber-100'>Analytics Section</p>
        <ul className='ml-8  list-disc text-gray-200'>
          <li>See your analytics</li>
          <li>What to expect</li>
          {/* <li>How to improve</li> */}
        </ul>
      </div>

      <div className='border-2 rounded-lg py-2   px-8'>
        <p className='text-xl  font-bold text-amber-100'>Our Upcoming features</p>
        <ul className='ml-8  list-disc text-gray-200'>
          <li>Messages</li>
          <li>Notifications</li>
        </ul>
      </div>
  </div>
        </div>
  )
}

export default RulesInfo