import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Forms.css';
// import {Redirect} from 'react-router-dom';
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
            // return  <Redirect  to='/game' />
            props.history.push('/game')
        }
    }

    return(
        <div className='form-wrapper'>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label>
                        <p>Username</p>
                        <input type='text' onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type='password' onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div className='btn-container'>
                        <button onClick={handleSubmit} className='ui-btn form-btn'>Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}


export default withRouter(Login)