import React, {useState} from 'react';
import './App.css';
// import Gamez from './Gamez/Gamez';
import Auth from './Auth/Auth';
import Gamez from './Gamez/Gamez';

function App() {

  const [token, setToken] = useState('')

  let storeSessionToken = (token) => {
    setToken(token)
  }
    
  return (
    <div className="bg">
      {token ? <Gamez /> : <Auth  tokenHandler={storeSessionToken}/>}
    </div>


  );
}

export default App;
