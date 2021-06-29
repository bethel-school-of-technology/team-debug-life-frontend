import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { withRouter } from 'react-router-dom';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.headers.get('Authorization'))
}

 function Login( props ) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        props.setToken(token);

        
        
        if(token){
            props.history.push('/game')
        } else {
            props.history.push('/login')
            alert('Your login credentials are incorrect. Please try again.')
        }  
    }

    function ReturnToCreateAccount() {
        props.history.push('/createaccount')
    }

    return(
        <div className='login-wrapper'>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type='text' onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type='password' onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button onClick={handleSubmit}>Login</button>
                </div>
            </form>
            <div className="accountDisclaimer">
                <small >Need an account?</small>
                <button onClick= {ReturnToCreateAccount}>Set One Up</button>
            </div>    
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default withRouter(Login)