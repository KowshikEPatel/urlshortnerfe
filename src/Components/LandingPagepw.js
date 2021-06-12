import {useState} from 'react'
/*import {Link} from 'react-router-dom'*/

export default function LandingPage(){

    /*
    const [passwords,setPasswords] = useState("")
    const [resetRequested,setResetRequested] = useState(false)

    

    function handleChangePassword(event){
            setPasswords(event.target.value)
    }
    
    function handleChangeResetRequested(event){
        setResetRequested(event.target.value)
    }

    const cred = {username,passwords,resetRequested}*/
    
    const [username,setUsername] = useState("") 
    const [disablebutton,setDisable] = useState("")
    const [displayparra,setDisplaypara] = useState("none")
    function handleChangeUser(event){
        setUsername(event.target.value)
    }

    
    const handleClick= ()=>{
        fetch(`https://kp-passwordresetter.herokuapp.com/forgotpw`,{
        method:'POST',
        body:JSON.stringify({"user_name":username})
        })
        .then(response=>response.json())
        .then(data=>{
            setDisable("none")
            setDisplaypara("block")
            console.log(data)
        })
    }
    return  <>
        <div className="card" style={{width:"20rem",margin:"70px 0 300px 400px"}}>
             <div class="card-body">
                     <h4 class="card-title">Reset your password</h4>
                     
                   <h5>Username</h5>
                   <input type="text" width="100px" className="form-control" style={{marginBottom:"15px"}} onChange={handleChangeUser}  value={username}></input>
                   <div style={{textAlign:"right"}}>
                    <button style={{display:disablebutton}} className="btn btn-primary" onClick={handleClick} >Submit</button>
                   </div>
                   <p style={{display:displayparra}}>An email has been sent to the registered email address</p>
             </div>
        </div>
        </>

}