import React, {useState, useEffect} from 'react';
import './Games.css';
import Game from '../Game/Game';
import APIURL from '../../helpers/enviroment';



  const Games = () => {
    const x = (Math.floor((Math.random()) * 21 + 1));
    const y = (Math.floor((Math.random()) * 20 + 1));
    const z = (Math.floor((Math.random()) * 19 + 1));
    const a = (Math.floor((Math.random()) * 18 + 1));
    const b = (Math.floor((Math.random()) * 17 + 1));
    
    let [game, setGame] = useState([]);
    // let [game2, setGame2] = useState([]);
    // let [game3, setGame3] = useState([]);
    // let [game4, setGame4] = useState([]);
    // let [game5, setGame5] = useState([]);

    // console.log(x);
    useEffect(() => {
      fetchGames();
      // fetchGames2();
    },[])

    let fetchGames = () => {
      let url= `${APIURL}${x}`;
      


      fetch(url)
      .then(res => res.json())
      .then(data => {
        setGame(data)
        // setGame2(data)
        // setGame3(data)
        // setGame4(data)
        // setGame5(data)
      })
      .catch(err => console.error({message: err}))
    }

  //   let fetchGames2 = () => {
  //     let url2= `https://switchgamesserver.herokuapp.com/games/${y}`;

  //     fetch(url2)
  //     .then(res => res.json())
  //     .then(data => {
  //       setGame2(data)
  //   })
  //   .catch(err => console.error({message: err}))
  // }
      return(
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name of Game</td>
                    <td>Game Genre</td>
                    <td>Game Price</td>
                    <td>Developer</td>
                </tr>
            </thead>
            <tbody>
                
                
                   <Game game={game} />
                   {/* <Game game2={game2} /> */}
                   {/* game2={game2} game3={game3} game4={game4} game5={game5} /> */}
                  
                
                   
               
            </tbody>
        </table>
      )
  }

  export default Games;