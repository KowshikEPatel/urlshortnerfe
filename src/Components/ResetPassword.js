
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'


export default function ResetPassword(){

    const {str} = useParams();

    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmpassword] = useState("");
    const [displaypara,setDisplaypara] = useState("none");

    const handleChangePassword = (e)=>{
        setPassword(e.target.value)
    }

    const handleChangeConfirmPassword = (e)=>{
        setConfirmpassword(e.target.value)
    }
    useEffect(()=>{
        if(password!==confirmPassword){
            setDisplaypara("block")
        }
    },[password,confirmPassword])

    const sendNewPassword=()=>{

        fetch(`https://kp-microurl.herokuapp.com/resetpassword/${str}`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({"password":password})
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
    }

    return <div className="card" style={{width:"20rem",margin:"70px 0 0 400px"}}>
    <div className="card-body">
            <h4 className="card-title">Enter your new password</h4>
          <h5>Password</h5>
          <input type="password" width="100px" className="form-control" style={{marginBottom:"15px"}}  onChange={handleChangePassword} value={password}></input>
          <h5>Confirm Password</h5>
          <input type="password" width="100px" className="form-control" style={{marginBottom:"15px"}}  onChange={handleChangeConfirmPassword} value={confirmPassword}></input>
               <div style={{textAlign:"right"}}>
               <button className="btn btn-secondary" onClick={sendNewPassword}>Change Password</button>
              <p style={{display:displaypara}}>Passwords do not match</p>
               </div>
    </div>
</div>
  }