import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function NewUser(){

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setConfirmPassword]=useState('')
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    

    const handleUNchange = (e)=>{
        setUsername(e.target.vale)
    }
    const handlePWchange = (e)=>{
        setPassword(e.target.vale)
    }
    const handleCPWchange = (e)=>{
        console.log(e.target.value)
        setConfirmPassword(e.target.vale)
    }
    const handleFNchange = (e)=>{
        setFirstname(e.target.vale)
    }
    const handleLNchange = (e)=>{
        setLastname(e.target.vale)
    }


    const handleOnSubmit = ()=>{
        
        fetch('https://kp-microurl.herokuapp.com/newuser',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({'username':username,'password':password,'firstname':firstname,'lastname':lastname,'cpw':confirmpassword})
        })
    }


    return <div className='card' style={{margin:'0px 0px 0px 400px',width:'30rem',padding:'40px',top:'30px' }}>
    <h3>New user registration</h3>
    <div className='form-group'>
        <label htmlFor="inputUsername"><b>Username</b></label>
        <input type="text" className="form-control" id="inputUsername" placeholder="Email (Username)" onChange={handleUNchange}/>
        <label htmlFor="inputFName"><b>First Name</b></label>
        <input type="email" className="form-control" id="inputFName"  placeholder="Enter First Name" onChange={handleFNchange}/>
        <label htmlFor="inputLName"><b>Last Name</b></label>
        <input type="email" className="form-control" id="inputLName"  placeholder="Enter Last Name" onChange={handleLNchange}/>
        <label htmlFor="inputPassword"><b>Password</b></label>
        <input type="password" className="form-control" id="inputPassword"  placeholder="Enter Password" onChange={handlePWchange}/>
        <label htmlFor="inputCPassword"><b>Confirm Password</b></label>
        <input type="password" className="form-control" id="inputCPassword"  placeholder="Enter Confirm Password" onChange={handleCPWchange}/>
        
        
        <div className='row'>
            <div className='col-6'>
                <Link to='/uservalidate'><button className='btn btn-light mt-4' style={{width:'100%'}} onClick={handleOnSubmit}>Submit</button></Link>
            </div>
        </div>
        
    </div>
</div>
}