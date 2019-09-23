import React from 'react';

const Game = (props) => {

    return ( 
        <tr key={props.index}>
            <td>{props.game.id}</td>
            <td>{props.game.nameOfGame}</td>
            <td>{props.game.gameGenre}</td>
            <td>{props.game.gamePrice}</td>
            <td>{props.game.developer}</td>
        </tr>   
    )
}
// else if (props.game.id === y){ 
//     console.log(y);  
//     return (
//         <tr key={props.index}>
//             <td>{props.game.id}</td>
//             <td>{props.game.nameOfGame}</td>
//             <td>{props.game.gameGenre}</td>
//             <td>{props.game.gamePrice}</td>
//             <td>{props.game.developer}</td>
//         </tr>
//     )
// }
// else if (props.game.id === z){  
//     console.log(z);  
//     return (
//         <tr key={props.index}>
//             <td>{props.game.id}</td>
//             <td>{props.game.nameOfGame}</td>
//             <td>{props.game.gameGenre}</td>
//             <td>{props.game.gamePrice}</td>
//             <td>{props.game.developer}</td>
//         </tr>
//     )
// }
// else if (props.game.id === a){    
//     console.log(a);
//     return (
//         <tr key={props.index}>
//             <td>{props.game.id}</td>
//             <td>{props.game.nameOfGame}</td>
//             <td>{props.game.gameGenre}</td>
//             <td>{props.game.gamePrice}</td>
//             <td>{props.game.developer}</td>
//         </tr>
//     )
// }
// else if (props.game.id === b){    
//     console.log(b);
//     return (
//         <tr key={props.index}>
//             <td>{props.game.id}</td>
//             <td>{props.game.nameOfGame}</td>
//             <td>{props.game.gameGenre}</td>
//             <td>{props.game.gamePrice}</td>
//             <td>{props.game.developer}</td>
//         </tr>
//     )
// }
// else {
//     return(
//         <h1></h1> 
//     )
// }
// }
export default Game;