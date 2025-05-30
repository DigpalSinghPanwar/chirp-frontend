import React, { useEffect, useState, useRef } from 'react';
import CreateTweet from '../components/CreateTweet';
import ReadTweet from '../components/ReadTweet';
import {axiosInstance} from '../api/axios';

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchTweets = async () => {
    setLoading(true);
    const res = await axiosInstance.get(`/tweet?page=${page}&limit=5`);
    const newTweets = await res?.data?.data?.tweets;

    if (newTweets.length === 0) {
      setHasMore(false);
    } else {
      setTweets(prev => [...prev, ...newTweets]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchTweets();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight &&
        !loading &&
        hasMore
      ) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
      <div className='flex'>

    
<div >
<div>
    <CreateTweet/>
</div>
<div className=''>
{tweets?.map((tweet) => (
        <ReadTweet key={tweet._id} tweet={tweet} />
      ))}
      {loading && <p className="text-amber-100">Loading more...</p>}
      {!hasMore && <p className="text-white">No more tweets to show.</p>}
</div>
</div>
<div className='w-[200px] ml-4 px-8 relative '>
{/* <div> */}
  <div className='w-[500px]  fixed  top-16 '>
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
          <li>How to improve</li>
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
</div>
  );
};

export default Dashboard;



// import React, { useEffect, useState } from 'react';
// import CreateTweet from '../components/CreateTweet';
// import ReadTweet from '../components/ReadTweet';
// import {axiosInstance} from '../api/axios';

// const Dashboard = () => {
//   const [page, setPage] = useState(1);
//   const [tweets, setTweets] = useState([]);
//   const [loading, setLoading] = useState(false);
//   console.log(page)

//   useEffect(() => {
//     const fetchTweets = async () => {
//       setLoading(true);
//       const res = await axiosInstance.get(`/tweet?page=${page}&limit=5`);
//       const newTweets =  await res.data.data.tweets;
//       console.log(newTweets)
//       setTweets(prev => [...prev, ...newTweets]);
//       setLoading(false);
//     };
//     fetchTweets();
//   }, [page]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop + 1 >=
//         document.documentElement.scrollHeight
//       ) {
//         setPage(prev => prev + 1);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className='flex flex-col items-center gap-4'>
//       <CreateTweet />
//       {tweets.map((tweet) => (
//         <ReadTweet key={tweet._id} tweet={tweet} />
//       ))}
//       {loading && <p className="text-amber-100">Loading more...</p>}
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useEffect } from 'react'
// import CreateTweet from '../components/CreateTweet'
// import ReadTweet from '../components/ReadTweet'
// import useGet from '@/hooks/useGet'

// const Dashboard = () => {

//     const {res, loading, error} = useGet('/tweet')
//     console.log(res?.data?.data?.tweets)
//     console.log(loading)
//     console.log(error)
    
//   return (
//     <div className='flex'>

    
//     <div >
//     <div>
//         <CreateTweet/>
//     </div>
//     <div className=''>
//       {loading && <p className='text-center text-amber-100'>Loading...</p>}
//       {error && <p className='text-center text-amber-100'>Error</p>}
//         {res?.data?.data?.tweets?.length > 0 &&  res?.data?.data?.tweets?.map((tweet) => {
//           return (
//              <ReadTweet key={tweet._id} tweet={tweet}/>
//         ) } ) }
//     </div>
//     </div>
//     <div className='w-[200px] ml-4 px-8 relative '>
//     {/* <div> */}
//       <div className='w-[500px]  fixed  top-16 '>
//           <div className='border-2 rounded-lg p-4 px-8'>
//             <p className='text-xl font-bold text-amber-100'>Make sure to follow our rules</p>
//             <ul className='ml-8  list-disc text-gray-200'>
//               <li>Be kind</li>
//               <li>Be respectful</li>
//               <li>Be honest</li>
//               <li>Be true</li>
//               <li>Be yourself</li>
//             </ul>
//           </div>
//           <div className='border-2 rounded-lg my-2 py-2 px-8'>

//             <p className='text-xl  font-bold text-amber-100'>Profile Section</p>
//             <ul className='ml-8  list-disc text-gray-200'>
//               <li>See your profile</li>
//               <li>Make changes to your profile</li>
//             </ul>
                    
//             <p className='text-xl mt-2 font-bold text-amber-100'>Analytics Section</p>
//             <ul className='ml-8  list-disc text-gray-200'>
//               <li>See your analytics</li>
//               <li>What to expect</li>
//               <li>How to improve</li>
//             </ul>
//           </div>

//           <div className='border-2 rounded-lg py-2   px-8'>
//             <p className='text-xl  font-bold text-amber-100'>Our Upcoming features</p>
//             <ul className='ml-8  list-disc text-gray-200'>
//               <li>Messages</li>
//               <li>Notifications</li>
//             </ul>
//           </div>
          
           
           
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Dashboard