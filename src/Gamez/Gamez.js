import React, {useState, useEffect} from 'react';
import Games from './Games/Games';
import Dropdown from '../Dropdown';
import {Button, Label, Container} from 'reactstrap';


  const Gamez = () => {
    const x = (Math.floor((Math.random()) * 21 + 1));
    const y = (Math.floor((Math.random()) * 20 + 1));
    const z = (Math.floor((Math.random()) * 19 + 1));
    const a = (Math.floor((Math.random()) * 18 + 1));
    const b = (Math.floor((Math.random()) * 17 + 1));
    
//     let [game, setGame] = useState([]);

//     // console.log(x);
//     useEffect(() => {
//       fetchGames();
//     },[])

//     let fetchGames = () => {
//       let url= `http://localhost:3000/games/`;

//       fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         setGame(data)
//       })
//       .catch(err => console.error({message: err}))
//     }
      return(
//         <table>
//             <thead>
//                 <tr className="gamez">
//                     <td>ID</td>
//                     <td>Name of Game</td>
//                     <td>Game Genre</td>
//                     <td>Game Price</td>
//                     <td>Developer</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 {game.map((game, index) => {
//                    return (
//                    <Game game={game} key={index} index={index}/>
//                    )   
                
                   
//                 })}
//             </tbody>
//         </table>
//       )
//   }

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













