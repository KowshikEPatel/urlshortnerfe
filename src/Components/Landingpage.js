import React,{useContext} from 'react'
import {Link} from 'react-router-dom' 
import './Landingpage.css'
import {UserContext} from '../Contexts/UserContext'


export default function Landingpage() {
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [message,setMessage] = React.useState({state:false,text:'',display:'none'})
    const data = useContext(UserContext)
    const handleSubmit = ()=>{
        fetch('https://kp-microurl.herokuapp.com/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':username,'password':password})
        })
        .then(response=>response.json())
        .then(response=>{
            console.log(response)
            if(response.state){
                data.setLoggedUser(response.user)
                data.setIsLoggedIn(true)
                data.setLoggedUserUrls(response.currentUrl)
            }
            else{
                setMessage({state:false,text:response.message,display:'block'})
            } 
        })
        .catch(err=>{console.log(err)})
    }
    
    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    
    return (
        <div>
            <div className='row'>
                <div className='col-6'>
                        <div className='bg-image'></div>
                </div>
                <div className='col-6'>
            <div className='card' style={{width:'25rem',padding:'40px',top:'30px' }}>
                <h3>Log In to microURL</h3>
                <div className='form-group'>
                    <label htmlFor="inputEmail"><b>Email address</b></label>
                    <input type="email" className="form-control" id="inputEmail"  placeholder="Enter Email" onChange={handleUsername}/>
                    <label htmlFor="inputPassword"><b>Password</b></label>
                    <input type="password" className="form-control" id="inputPassword"  placeholder="Enter Password" onChange={handlePassword}/>
                    <p style={{display:message.display,color:'red'}}>{message.text}</p>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-6'>
                            <small><div style={{color:'blue',marginTop:'10px'}}><Link to='/forgotpw'>Forgot Password?</Link></div></small>
                        </div>
                        <div className='col-6'>
                            <button className='btn btn-primary mt-3' onClick={handleSubmit}>Submit</button>
                            <Link to='/newuser'><button type="button" className="btn"><small>New User? Register</small></button></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
