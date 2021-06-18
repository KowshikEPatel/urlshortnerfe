import {useContext} from 'react'
import {UserContext} from '../Contexts/UserContext'
import {Link} from 'react-router-dom'

import '../App.css'

//style={{backgroundColor: "#bcbcff",fontFamily:'serif'}}
export default function Topbar(){
    let {isLoggedIn} = useContext(UserContext)
    return <nav className='navbar  navbar-expand-lg' >
        <button className='navbar navbar-brand btn' style={{color:'#bcf8ec',fontSize:'2rem'}}>microURL</button>
        {isLoggedIn && <ul className='nav justify-content-end'>
            <li className='nav-item'><Link to='/home'><button className='btn nav-link' style={{margin:"0px",color:"#bcf8ec"}}>Home</button></Link></li>
            <li className='nav-item'><Link to='/dashboard'><button className='btn nav-link' style={{margin:"0px",color:"#bcf8ec"}}>Dashboard</button></Link></li>
            <li className='nav-item'><Link to='/userdata'><button className='btn nav-link' style={{margin:"0px",color:"#bcf8ec"}}>User</button></Link></li>
        </ul>}
    </nav>
}