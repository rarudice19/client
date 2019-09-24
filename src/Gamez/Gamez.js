import React, {useState, useEffect} from 'react';
import Games from './Games/Games';
import Dropdown from '../Dropdown';
import {Button, Label, Container} from 'reactstrap';


  const Gamez = () => {

      return(


    <div>
      <h1>Nintendo Switch Eshop Simplifier</h1>
      <hr />   
        <Label>Select your desiered genre to search by:</Label> 
        <Dropdown />
        <br />
        <Games />
      <br />
      <div>
      </div>
      <br />
    </div>
      )}

  export default Gamez;













