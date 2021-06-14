import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import Topbar from './Components/Topbar'
import {UserContext} from './Contexts/UserContext'
import Landingpage from './Components/Landingpage'
import LandingPagepw from './Components/LandingPagepw'
import Footer from './Components/Footer'
import NewUser from './Components/NewUser'
import UserValidate from './Components/UserValidate'
import UserActivated from './Components/UserActivated'
import ResetPassword from './Components/ResetPassword'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (<>
          <UserContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            <Router>
            <Topbar/>
              <Switch>
                <Route exact path='/'><Landingpage/></Route>
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
              </Switch>
              <Footer/>
            </Router>
          </UserContext.Provider>
  </>
  );
}

export default App;
