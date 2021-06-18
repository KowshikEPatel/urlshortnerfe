import React,{useContext} from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../Contexts/UserContext'

export default function UserData() {
    const contextData = useContext(UserContext)

    const handleClick = ()=>{
        contextData.setLoggedUser({})
        contextData.setIsLoggedIn(false)
    }

    return (
        <div className='container'>
            <div className='row'>
                <Link to='/'  onClick={handleClick}>Logout</Link>
                <hr></hr>
            </div>
            <div className='row'>
                <div className='col-md-6'>First Name</div>
                <div className='col-md-6'>{contextData.loggedUser['firstName']}</div>
            </div>
            <div className='row'>
                <div className='col-md-6'>Last Name</div>
                <div className='col-md-6'>{contextData.loggedUser['lastName']}</div>
            </div>
        </div>
    )
}
