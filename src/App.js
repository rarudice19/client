import React, {useState} from 'react';
import './App.css';
import {Button, Label, Input, Container} from 'reactstrap';

function App() {
  const [genre, setGenre] = useState('');

  const games = () => {
    console.log(genre)
    if (genre === 'RPG'){
      console.log(`RPGs (Role Playing Games): `)
    }
    else if (genre === 'Action'){
      console.log(`Action Games: `)
    }
  };

  return (
    <div>
      <h1>Nintendo Switch Eshop Simplifier</h1>
      <hr />
      <Container>
        <Label>Enter your desiered genre to search by.</Label>
        <Input name="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
        <Button onClick={games}>Search</Button>
      </Container>
      <br />
      <br />
      <Container>
        <Label>Genre Bank</Label>
        <div>
          <ul>
            <li>Action</li>
            <li>Adventure</li>
            <li>Fantasy</li>
            <li>Party</li>
            <li>Platformer</li>
            <li>Racing</li>
            <li>RPG</li>
            <li>Strategy</li>
          </ul>
        </div>
      </Container>     
    </div>
  );
}

export default App;
