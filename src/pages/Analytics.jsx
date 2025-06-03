import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import  useGet  from '../hooks/useGet';
import Loader from '../components/Loader';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

ChartJS.register(ArcElement, Tooltip, Legend);


const Analytics = () => {
    const userId = localStorage.getItem('user_id')
    const {res, loading, error} = useGet(`users/${userId}/analytics`)
    const analytics = res?.data?.data
    console.log(analytics)
    const data = {
        labels: ['Comments Made', 'Likes Given', 'Tweets Made'],
        datasets: [
          {
            label: '# Total Number',
            data: [analytics?.commentsMade, analytics?.likesGiven, analytics?.tweetsMade],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

      if (loading) return (
        <Card className='w-6/12 h-36'>
          <Loader/>
        </Card>
      )

      if (error) return (
        <div className='w-full h-36'>
          <p>Error: {error.message}</p>
        </div>
      )

  return (
    <Card className='w-6/12 h-full'>
    <CardHeader>    
        <CardTitle>View your Analytics</CardTitle>
      </CardHeader>
    {/* <div className='w-full h-[80vh] bg-white'> */}
      <Doughnut data={data} />
    {/* </div> */}
    </Card>
  )
}

export default Analytics




