import {Link} from 'react-router-dom'

export default function UserActivated(){
    
    return <div className='container'>
             <div className="jumbotron">
                <h1 className="display-4">Your account is activated</h1>
                <p className="lead">You can login to your account </p>
                <hr className="my-4"></hr>
                <p class="lead">
                    <Link to='/'><button class="btn btn-primary">Login</button></Link>
                </p>
             </div>
           </div>
}
