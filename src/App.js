import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom';

import Topbar from './Components/Topbar'
import {UserContext} from './Contexts/UserContext'
import Landingpage from './Components/Landingpage'
import LandingPagepw from './Components/LandingPagepw'
import Footer from './Components/Footer'
import NewUser from './Components/NewUser'
import UserValidate from './Components/UserValidate'
import UserActivated from './Components/UserActivated'
import ResetPassword from './Components/ResetPassword'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import UserData from './Components/UserData'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser,setLoggedUser] = useState({})
  const [loggedUserUrls,setLoggedUserUrls] = useState({})
  return (<>
          <UserContext.Provider value={{isLoggedIn,setIsLoggedIn,loggedUser,setLoggedUser,loggedUserUrls,setLoggedUser}}>
            <Router>
            <Topbar/>
              <Switch>
                <Route exact path="/">
                    {isLoggedIn ? <Redirect to="/home" /> : <Landingpage />}
                </Route>
                <Route exact path="/forgotpw">
                    <LandingPagepw/>
                </Route>
                <Route exact path="/newuser">
                    <NewUser/>
                </Route>
                <Route exact path="/uservalidate">
                    <UserValidate/>
                </Route>
                <Route exact path="/useractivated">
                    <UserActivated/>
                </Route>
                <Route path="/resetpassword/:str">
                    <ResetPassword />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
                <Route exact path="/userdata">
                    <UserData />
                </Route>
              </Switch>
              <Footer/>
            </Router>
          </UserContext.Provider>
  </>
  );
}

export default App;
