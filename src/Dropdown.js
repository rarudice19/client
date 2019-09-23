import React, {useState} from 'react';
import {Container} from 'reactstrap';
  const Dropdown = () => {
    const [genre, setGenre] = useState('');

    const games = () => {
        if (genre === 'RPG'){
          console.log(`RPGs (Role Playing Games): `)
        }
        else if (genre === 'Action'){
          console.log(`Action Games: `)
        }
        else if (genre === 'Party'){
          console.log(`Party Games: `)
        }
        else if (genre === 'Platformer'){
          console.log(`Platforming Games: `)
        }
        else if (genre === 'Racing'){
          console.log(`Racing Games: `)
        }
        else if (genre === 'Fighting'){
          console.log(`Fighting Games: `)
        }
        else if (genre === 'Hack and Slash'){
          console.log(`Hack and Slash Games: `)
        }
        else if (genre === 'Shooter'){
          console.log(`Shooter Games: `)
        }
        else {
          console.log("Error: Must select a genre from the dropdown menu")
        }
      };
    

    return (
        <Container>
        <select value={genre} onChange={(e) => setGenre(e.target.value)} className="biggo">
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
        </Container>
    );

    }

export default Dropdown;


// onClick={(e) => randomID(e, ids)}