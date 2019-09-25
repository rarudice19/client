import React from 'react';
import './Navbar.css';
import Logout from './Logout/Logout';
import acctPic from '../Assets/Nintendo-eShop.png';
// import Logout from './Logout/Logout';

//Props are paramaters that we can pass into our functional components
const Navbar = (props) => {
    return(
        <nav>
            <img className ="nav-img" src = {acctPic} alt="pie"/>
            <h1>Nintendo Switch Eshop Simplifier</h1> 
            <Logout logout={props.logout}/>
            
        </nav>
    )
}

export default Navbar;