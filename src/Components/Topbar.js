import {useContext} from 'react'

import {UserContext} from '../Contexts/UserContext'

//style={{backgroundColor: "#bcbcff",fontFamily:'serif'}}
export default function Topbar(){
    let test = useContext(UserContext)
    return <nav className='navbar  navbar-expand-lg navbar-light bg-light' >
        <button className='navbar navbar-brand btn' >micro URL</button>
        {test && <ul style={{}}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>}
    </nav>
}