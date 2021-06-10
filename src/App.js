
import './App.css';
import {} from 'react-router'
import {useState,useEffect} from 'react'

import Topbar from './Components/Topbar'
import {UserContext} from './Contexts/UserContext'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (<>
          <Topbar/>
    
  </>
  );
}

export default App;
