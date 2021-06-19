import React,{ useContext } from 'react'
import { Bar } from 'react-chartjs-2'

import { UserContext } from '../Contexts/UserContext'
import Card from '../Components/Card'

export default function Dashboard() {
    
    const contextData = useContext(UserContext)
    const urlsAggre = contextData.loggedUserUrls
    const chartData = {
        labels:urlsAggre.map(e=>e['urlString'].slice(36)),
        datasets:[
            {
                label:'Number of clicks',
                data:urlsAggre.map(e=>e['totalClicks']),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1,
            }
        ]
    }
    
    return (
        <div className='container'>
            <div className='row'>
                
                <Bar
	                data={chartData}
	                width={100}
	                height={200}
	                options={{ maintainAspectRatio: false }}
                />
            </div>
            {urlsAggre.map(e=>{
                return <Card
                        url={e['urlString']}
                        clicks={e['totalClicks']}
                         />
            })}

        </div>
    )
}
