import React, { useState } from 'react';
import "../Forms.css"; 

export default function CreateAccount() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const status = await register({
            username,
            password
        });
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
        </div>
    )
    }


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
