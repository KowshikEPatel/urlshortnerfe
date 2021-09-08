
import React,{useContext,useState} from 'react';
import { UserContext } from '../Contexts/UserContext';
import Loader from './Loader';

export default function Home() {
    const data = useContext(UserContext)
    const [url,setUrl] = useState('') 
    const [showUrl,setShowUrl] = useState({"display":"none","text":''})
    const handleUrl = (e) => {
        setUrl(e.target.value)
    }

    const handleSubmit = ()=>{
        data.setIsLoading(true)
        let urlInfo = {
                        'url':url,
                        '_id':data.loggedUser['_id']
                     }        
        fetch('https://kp-microurl.herokuapp.com/addurl',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(urlInfo),
        })
        .then(response=>response.json())
        .then(response=>{
            
            setShowUrl({"display":'block','text':response['url']})
            data.setIsLoading(false)
        })
        .catch(err=>{
            console.log(err);
            data.setIsLoading(false);
        }) 
    }

    if(data.isLoading){
        return <Loader/>
    }
    else{
        return <div style={{backgroundColor:'#a7fff0'}}>
        <h3 style={{padding:'20px'}} >Hi {data.loggedUser['firstName']}</h3> 
         <div className='card' style={{width:'25rem',padding:'40px',top:'30px',left:'400px',borderRadius:"20px" }}>
              <div className='form-group'>
                  <label htmlFor="inputURL"><h4><i className="fa fa-link" aria-hidden="true"></i>Your Long URL</h4></label>
                  <input type="text" className="form-control" id="inputURL" onChange={handleUrl} />
                  <button className='btn mt-3' onClick={handleSubmit} style={{width:'20rem',backgroundColor:'#73c3ff'}} > Submit </button>
                  <p style={{marginTop:'15px',display:showUrl["display"],backgroundColor:'#e6e6e6',color:'#333' }} >{showUrl['text']}</p>
              </div>
          </div>
      </div>
    }
    
    
}

