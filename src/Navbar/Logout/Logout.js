import React from 'react';
import './Logout.css';
import logout from '../../Assets/logout.jpg';

const Logout = (props) => {
    return (
        <img className ="logout-img" src = {logout} alt="logout" onClick={props.logout}/>
    )
}

export default Logout;
