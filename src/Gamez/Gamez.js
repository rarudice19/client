import React, {useState, useEffect} from 'react';
import Games from './Games/Games';




  const Gamez = () => {
    let [game, setGame] = useState([]);
    


    useEffect(() => {
      fetchGames();
    },[])


    let fetchGames = () => {    
      
      fetch(`https://switchgamesserver.herokuapp.com/games/`)
      .then(res => res.json())
      .then(data => {
        setGame(data)
        
      })
      .catch(err => console.error({message: err}))
    }

      return(
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
            {game.map((game, index) => {
               return (
                 <div>
                <button onClick={fetchGames} className="biggo">Search</button>
                <Games game={game} key={index} index={index}/>
                </div> 
               )   
            })}
        </tbody>
    </table>
      )}

  export default Gamez;













