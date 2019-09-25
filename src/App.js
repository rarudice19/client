import React, {useState} from 'react';
import './App.css';
// import Gamez from './Gamez/Gamez';
import Auth from './Auth/Auth';
import Games from './Gamez/Games/Games';
import Navbar from './Navbar/Navbar';

function App() {

  const [token, setToken] = useState('')

  // let storeSessionToken = (token) => {
  //   setToken(token)
  // }

  let updateToken = (newToken) => {
    localStorage.setItem("token", newToken)
    setToken(newToken)
  }

  let clearToken = () => {
    localStorage.clear()
    setToken('')
  }
    
  return (
    <div className="bg">
      <Navbar logout={clearToken} />
            
        <hr />
      {token ? <Games /> : <Auth  tokenHandler={updateToken}/>}
    </div>


  );
}

export default App;
