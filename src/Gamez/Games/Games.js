import React, {useState, useEffect} from 'react';
import './Games.css';
import {Container, Label,Button} from 'reactstrap';

import img from '../../Assets/hyruleWarriors.png'
import APIURL from '../../helpers/enviroment';




  const Games = () => {
    const [genre, setGenre] = useState('');
    let [games, setGames] = useState([]);
    

    useEffect(() => {
      fetchGames();
    },[])

    
  

    let fetchGames = () => {    
      
      fetch(`https://switchgamesserver.herokuapp.com/games/`)
      .then(res => res.json())
      .then(data => {
        // arrgh.push(data)
        console.log(data)
        setGames(data);

          // let randomGame = arrgh[0].filter(grep => `${grep.gameGenre}` === `${genre}`);
        
          // let x = (Math.floor((Math.random()) * randomGame.length ));
          

        

        // setGame(arrgh[0][x]);
          
      
      })
      
      .catch(err => console.error({message: err}))
    
      console.log(genre);
      
     
      

     
      }

      let filteredGames = games.filter(grep => `${grep.gameGenre}` === `${genre}`);

      let x = (Math.floor((Math.random()) * filteredGames.length ));

      let singles = filteredGames.filter(gar =>  gar === filteredGames[x]);


      return(
        <Container>   
        <h1 className="seperate">Need help finding your next Nintendo Switch game? You've come to the right place!</h1>
        <Label className="lab">Simply select your desiered genre to search by:</Label> 
        <Container>
        <select value={genre} onChange={(e) => setGenre(e.target.value)} className="biggo">
            <option style={{"display": "none"}}> -- select an option -- </option>
            <option>Action</option>
            <option>Fighting</option>
            <option>Hack and Slash</option>
            <option>Party</option>
            <option>Platformer</option>
            <option>Racing</option>
            <option>RPG</option>
            <option>Shooter</option>
        </select>
        <br />
        </Container>
        <br />
        <br /> 
        <br /> 
        <h3> The next game you should buy is:</h3>
        <table>
            <thead>
                <tr>                   
                    <td>Game</td>
                    <td>Genre</td>
                    <td>Price (in USD)</td>
                    <td>Developer</td>
                </tr>
            </thead>
            <tbody>

               {singles.map(game => {
                 
                 
                  return (
                    <tr>
                    <td>{game.nameOfGame}</td>
                    <td>{game.gameGenre}</td>
                    <td>{game.gamePrice}</td>
                    <td>{game.developer}</td>
                    </tr>  
                  )

                })
                 
              }
               
              
               
            </tbody>
        </table>
        <h3>Already have this one? Click this button to search again within the given genre:</h3>
        {/* {
          filteredGames.splice(singles, 1)
        } */}
        <Button  onClick={fetchGames} className="biggo2">Search</Button>
        
        </Container>
      )
  }
  export default Games;