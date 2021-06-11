
import './App.css';
import {} from 'react-router'
import {useState} from 'react'

import Topbar from './Components/Topbar'
import {UserContext} from './Contexts/UserContext'
import Landingpage from './Components/Landingpage'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (<>
          <UserContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
          <Topbar/>
          <Landingpage/>
          </UserContext.Provider>
  </>
  );
}

export default App;
