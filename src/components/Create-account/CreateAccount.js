import React, { Component, useState } from 'react';
import "./createAccount.css"; 

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
                    <div className = "username">
                        <label htmlFor= "Username">Username</label>
                        <input type= "text" 
                        ClassName= "" 
                        placeholder = "username" 
                        type ="username" 
                        name = "username"
                        noValidate
                        onChange={e => setUserName(e.target.value)}
                        />
                    </div>
                    <div className = "password">
                        <label htmlFor= "password">Password</label>
                        <input type= "text" 
                        ClassName= "" 
                        placeholder = "Password" 
                        type ="password" 
                        name = "password"
                        noValidate
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className ="createAccount">
                        <button type="submit">Create Account</button>
                        <small>Already have an account?</small>
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
