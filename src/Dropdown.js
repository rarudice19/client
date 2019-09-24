import React, {useState} from 'react';
import {Container} from 'reactstrap';

const Dropdown = () => {
    const [genre, setGenre] = useState('');

     
    const gameArr = [
      { id: '1', game: 'Hyrule Warriors', genre: "Hack and Slash" },
      { id: '2', game: 'DOOM', genre: "Shooter" },
      { id: '3', game: 'Splatoon 2', genre: "Shooter" },
      { id: '4', game: `Pokemon Let's GO Pikachu`, genre: "RPG" },
      { id: '5', game: `Pokemon Let's GO Eevee`, genre: "RPG" },
      { id: '6', game: 'Astral Chain', genre: "Action" },
      { id: '7', game: 'Super Mario Party', genre: "Party" },
      { id: '8', game: 'Breath of the Wild', genre: "RPG" },
      { id: '9', game: 'Super Mario Maker 2', genre: "Platformer" },
      { id: '10', game: 'Kirby Star Allies', genre: "Platformer" },
      { id: '11', game: 'Super Mario Odyssey', genre: "RPG" },
      { id: '12', game: '1 2 Switch', genre: "Party" },
      { id: '13', game: 'Team Sonic Racing', genre: "Racing" },
      { id: '14', game: 'Crash Team Racing', genre: "Racing" },
      { id: '15', game: "Super Smash Bros Ultimate", genre: "Fighting" },
      { id: '16', game: "Mortal Kombat 11", genre: "Fighting" },
      { id: '17', game: "Bloodstained: Curse of the Moon", genre: "Action" },
      { id: '18', game: "Megaman 11", genre: "Platformer" },
      { id: '19', game: "Fire Emblem Warriors", genre: "Hack and Slash" },
      { id: '20', game: "Test1", genre: "RPG" },
      { id: '21', game: "Test2", genre: "RPG" },
      { id: '22', game: "Test3", genre: "RPG" },
      { id: '23', game: "Test4", genre: "RPG"},
      { id: '24', game: "Test5", genre: "RPG" },
      { id: '25', game: "Test6", genre: "RPG" },
      { id: '26', game: "Test7", genre: "RPG" },
      { id: '27', game: "Test8", genre: "RPG" },
   ];   

    const games  = (goop) => {

    let randomGame = gameArr.filter(hm =>  `${hm.genre}` === `${genre}` );
    console.log(randomGame);

    let x = (Math.floor((Math.random()) * randomGame.length + 1));
    console.log(randomGame[x]);
    randomGame.splice(x, 1);

    let y = (Math.floor((Math.random()) * randomGame.length  + 1));
    console.log(randomGame[y]);
    randomGame.splice(y, 1);
      
    let z = (Math.floor((Math.random()) * randomGame.length + 1));
    console.log(randomGame[z]);
    randomGame.splice(z, 1); 

    let a = (Math.floor((Math.random()) * randomGame.length + 1));
    console.log(randomGame[a]);
    randomGame.splice(a, 1);

    let b = (Math.floor((Math.random()) * randomGame.length + 1));
    console.log(randomGame[b]);
     
      
      
      
      
      
      
    
      

    
    }
    return (
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
        <button onClick={games} className="biggo">Search</button>
        <h2>GAMES </h2>
        </Container>
    );

    }
  
  

export default Dropdown;
