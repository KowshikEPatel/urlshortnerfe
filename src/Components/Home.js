
import React,{useContext,useState} from 'react'
import { UserContext } from '../Contexts/UserContext'

export default function Home() {
    const data = useContext(UserContext)
    console.log(data.loggedUser['firstName'])
    const [url,setUrl] = useState('') 
    const handleUrl = (e) => {
        setUrl(e.target.value)
    }

    const handleSubmit = ()=>{
        fetch('https://kp-microurl.herokuapp.com/redirect',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:{url}
        })
    }

    return <div style={{backgroundColor:'#a7fff0'}}>
          <h3 style={{padding:'20px'}} >Hi {data.loggedUser['firstName']}</h3> 
           <div className='card' style={{width:'25rem',padding:'40px',top:'30px',left:'400px',borderRadius:"20px" }}>
                
                <div className='form-group'>
                    <label htmlFor="inputURL"><h4><i class="fa fa-link" aria-hidden="true"></i>Your Long URL</h4></label>
                    <input type="text" className="form-control" id="inputURL" onChange={handleUrl} />
                    <button className='btn mt-3' onClick={handleSubmit} style={{width:'20rem',backgroundColor:'#73c3ff'}} > Submit </button>
                </div>
            </div>
        </div>
    
}

