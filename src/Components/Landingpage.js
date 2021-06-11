import React from 'react'
import {Link} from 'react-router-dom' 
import './background.jpg'

export default function Landingpage() {
    return (
        <div>
            <div className='card' style={{marginLeft:'750px',width:'25rem',padding:'40px',top:'30px' }}>
                <h3>Log In to microURL</h3>
                <div className='form-group'>
                    <label htmlFor="inputEmail"><b>Email address</b></label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Email"/>
                    <label htmlFor="inputPassword"><b>Password</b></label>
                    <input type="password" className="form-control" id="inputPassword" aria-describedby="emailHelp" placeholder="Enter Password"/>
                    <div className='row'>
                        <div className='col-6'>
                            <small><div style={{color:'blue',marginTop:'10px'}}><Link to='/forgotpw'>Forgot Password?</Link></div></small>
                        </div>
                        <div className='col-6'>
                            <button className='btn btn-primary mt-2'>Submit</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
