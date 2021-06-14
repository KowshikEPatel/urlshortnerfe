import {useState} from 'react'
/*import {Link} from 'react-router-dom'*/

export default function LandingPagepw(){
   
    const [username,setUsername] = useState("") 
    const [disablebutton,setDisable] = useState("")
    const [displayparra,setDisplaypara] = useState("none")
    function handleChangeUser(event){
        setUsername(event.target.value)
    }

    const handleClick= ()=>{
        console.log({"username":username})
        fetch(`https://kp-microurl.herokuapp.com/forgotpw`,{
        method:'POST',
        body:JSON.stringify({"username":username})
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
             <div className="card-body">
                     <h4 className="card-title">Reset your password</h4>
                     
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