
import React,{useContext} from 'react'
import { UserContext } from '../Contexts/UserContext'

export default function Home() {
    const data = useContext(UserContext)
    return (
        <div>
           Hi {data.loggedUser.fullname}
        </div>
    )
}

