import React, {useState} from 'react';
import './App.css';
// import Gamez from './Gamez/Gamez';
import Auth from './Auth/Auth';
import Games from './Gamez/Games/Games';

function App() {

  const [token, setToken] = useState('')

  let storeSessionToken = (token) => {
    setToken(token)
  }
    
  return (
    <div className="bg">
        <h1>Nintendo Switch Eshop Simplifier</h1>
        <hr />
      {token ? <Games /> : <Auth  tokenHandler={storeSessionToken}/>}
    </div>


  );
}

export default App;
