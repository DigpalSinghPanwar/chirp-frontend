import React, { useEffect, useState, useRef } from 'react';
import CreateTweet from '../components/CreateTweet';
import ReadTweet from '../components/ReadTweet';
import {axiosInstance} from '../api/axios';
import Loader from '@/components/Loader';

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [reloadTweet, setReloadTweet] = useState(false);

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
    if (reloadTweet) {
      axiosInstance.get(`/tweet?page=${1}&limit=5`)
      .then((res) => {
        setTweets(res?.data?.data?.tweets)
        setReloadTweet(false)
        setLoading(false)
      })
      .catch((err) => {
        setReloadTweet(false)
        setLoading(false)
      }).finally(() => {
        setReloadTweet(false)
        setLoading(false)
      })
    }
  }, [reloadTweet]);

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
      

    
<div >
<div>
    <CreateTweet setLoading={setLoading} setReloadTweet={setReloadTweet} />
</div>
<div className=''>
{tweets?.map((tweet) => (
        <ReadTweet key={tweet._id} tweet={tweet} />
      ))}
      {loading &&  <div className='w-full h-36'> <Loader /> </div>}
      {!hasMore && <p className="text-white">No more tweets to show.</p>}
</div>
</div>


  );
};

export default Dashboard;


