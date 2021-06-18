import React,{ useEffect,useContext } from 'react'
import { Line } from 'react-chartjs-2'

import { UserContext } from '../Contexts/UserContext'

export default function Dashboard() {
    
    const contextData = useContext(UserContext)

    useEffect(()=>{
        fetch('https://kp-microurl.herokuapp.com/userdata',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'_id':contextData.loggedUser['_id']})
        })
        .then(response=>response.json())
        .then(response=>{
            console.log(response)
            contextData.setLoggedUser(response)
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <div className='container'>
            <div className='row'>
                
                <Line
	                data={[1,2,3,4]}
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

        </div>
    )
}
