import React, {useState, useEffect} from 'react';
import './Games.css';
import {Container, Label} from 'reactstrap';
import Game from '../Game/Game';
import Game2 from '../Game/Game2';
import APIURL from '../../helpers/enviroment';
import Dropdown from '../../Dropdown';



  const Games = () => {

    let [game, setGame] = useState([]);
    // let [game2, setGame2] = useState([]);
    


    useEffect(() => {
      fetchGames();
    },[])


    let fetchGames = () => {    
      
      fetch(`https://switchgamesserver.herokuapp.com/games/`)
      .then(res => res.json())
      .then(data => {
        setGame(data)
        
      })
      // fetch(`https://switchgamesserver.herokuapp.com/games/4`)
      // .then(res => res.json)
      // .then(data => {
      //   setGame2(data)
        
      // })
      .catch(err => console.error({message: err}))
    }

      return(
        <Container>   
        <Label>Select your desiered genre to search by:</Label> 
        <Dropdown />
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name of Game</td>
                    <td>Genre</td>
                    <td>Price</td>
                    <td>Developer</td>
                </tr>
            </thead>
            <tbody>
              {/* <Game game={game} /> */}
              {/* <Game2 game2={game2} /> */}
                {game.map((game, index) => {
                   return (
                    <Game game={game} key={index} index={index}/> 
                   )   
                })}
            </tbody>
        </table>
        </Container>
      )
  }
  export default Games;