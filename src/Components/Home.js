
import React,{useContext,useState} from 'react'
import { UserContext } from '../Contexts/UserContext'

export default function Home() {
    const data = useContext(UserContext)
    const [url,setUrl] = useState('') 
    const [showUrl,setShowUrl] = useState({display:"none","text":''})
    const handleUrl = (e) => {
        setUrl(e.target.value)
    }

    const handleSubmit = ()=>{
        fetch('https://kp-microurl.herokuapp.com/addurl',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:{'url':url,
                  '_id':data.loggedUser['_id']
                 }
        })
        .then(response=>response.json())
        .then(response=>{
            console.log(response)
            setShowUrl({display:'block','text':response['url']})
        })
        .catch(err=>console.log(err))
    }

    return <div style={{backgroundColor:'#a7fff0'}}>
          <h3 style={{padding:'20px'}} >Hi {data.loggedUser['firstName']}</h3> 
           <div className='card' style={{width:'25rem',padding:'40px',top:'30px',left:'400px',borderRadius:"20px" }}>
                
                <div className='form-group'>
                    <label htmlFor="inputURL"><h4><i className="fa fa-link" aria-hidden="true"></i>Your Long URL</h4></label>
                    <input type="text" className="form-control" id="inputURL" onChange={handleUrl} />
                    <button className='btn mt-3' onClick={handleSubmit} style={{width:'20rem',backgroundColor:'#73c3ff'}} > Submit </button>
                    <textarea className="form-control" style={{marginTop:'15px',display:showUrl.display}} id="exampleFormControlTextarea3" rows="1" value={showUrl.text} readOnly ></textarea>
                </div>
            </div>
        </div>
    
}

