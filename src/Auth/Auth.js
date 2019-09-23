import React, {useState} from 'react';
import './Auth.css';
import APIURL from '../helpers/enviroment';

const Auth = (props) => {
    let [ login, setLogin ] = useState(true)
    let [ firstName, setFirstName ] = useState('');
    let [ lastName, setLastName ] = useState('');
    let [ email, setEmail ] = useState('');
    let [ password, setPassword ] = useState('');

    let changeLogin = (e) => {
        e.preventDefault();
        setLogin(!login)
   
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        let url = login ? 'https://switchgamesserver.herokuapp.com/auth/signin' : 'https://switchgamesserver.herokuapp.com/auth/signup'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })

            
        }).then( res =>  res.json())
        .then(data => {
            props.tokenHandler(data.sessionToken)
        })
    }
    return (
        <form className="card-like">
            <h1>{ login ? 'Log In' : 'Sign Up' }</h1>
            <label className="display-block" htmlFor="email">Email</label>
            <input className="display-block" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className="display-block" htmlFor="password">Password</label>
            <input className="display-block" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />


        {
            login ? null :
                <React.Fragment>
                    <label className="display-block" htmlFor="firstName">First Name</label>
                    <input className="display-block" type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label className="display-block" htmlFor="lastName">Last Name</label>
                    <input className="display-block" type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </React.Fragment>
        }

            <button onClick= {(e) => changeLogin(e) }>{ login ? 'Sign Up' : 'Log In' }</button>
            <button type="submit" onClick = {(e) => handleSubmit(e)}>Submit</button>
        </form>
    )
}

export default Auth;