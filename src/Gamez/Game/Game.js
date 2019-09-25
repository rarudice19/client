import React from 'react';

const Game = (props) => {

    return ( 
        <tr key={props.index}>
            {/* <td>{props.game.id}</td> */}
            <td>{props.game.nameOfGame}</td>
            <td>{props.game.gameGenre}</td>
            <td>{props.game.gamePrice}</td>
            <td>{props.game.developer}</td>
        </tr>   
    )
}

export default Game;