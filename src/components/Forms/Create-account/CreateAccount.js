import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import "../Forms.css";

async function register(credentials) {
    return fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.status)
}

function CreateAccount( props ) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const status = await register({
            username,
            password
        });

        if(status !== 200 ){
            props.history.push('/createaccount') 
            alert('This account already exists. Please login or create a new account.')
        } else {
            props.history.push('/login')
            alert('Account created successfully')
        }
    }

    function SkipToLogin() {
        props.history.push('/login')
    }

    return(
        <div className = "form">
            <div className = "form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit = {handleSubmit} noValidate>
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
            <div className="accountDisclaimer">
                <label>
                    Already have an Account? <button onClick= {SkipToLogin} className='ui-btn-alt form-btn'>Skip to Login</button>
                </label>
            </div>    
        </div>
    )
}

export default withRouter(CreateAccount)