import React,{ useContext } from 'react'
import { Line } from 'react-chartjs-2'

import { UserContext } from '../Contexts/UserContext'

export default function Dashboard() {
    
    const contextData = useContext(UserContext)
    const urlsAggre = contextData.loggedUserUrls
    const chartData = {
        labels:urlsAggre.map(e=>e['urlString'].slice(36)),
        datasets:[
            {
                label:'Number of clicks'
            }
        ]
    }
    console.log(chartData.labels)
    return (
        <div className='container'>
            <div className='row'>
                
                <Line
	                data={chartData}
	                width={100}
	                height={50}
	                options={{ maintainAspectRatio: false }}
                />
            </div>
            <div className='row'>
                <div className='col-lg-6' >
                    Total views 
                </div>
                <div className='col-lg-6' >
                    Most viewed links
                </div>
            </div>
            <div className='row'>
                <h5> Clicks <span className='badge badge-secondary'>4</span></h5>
            </div>
            <div className='row'>
                <h5> {contextData.isLoggedIn} <span className='badge badge-secondary'>4</span></h5>
            </div>

        </div>
    )
}
