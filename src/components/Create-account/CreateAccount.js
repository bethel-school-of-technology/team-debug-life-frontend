import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import "./createAccount.css"; 
import { withRouter } from 'react-router-dom';


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

    function CreateAccount() {
        const [username, setUserName] = useState();
        const [password, setPassword] = useState();

        const handleSubmit = async e => {
            e.preventDefault();
            const status = await register({
                username,
                password
            });
        }        


    // function CreateAccount( props ) {
    //     const [username, setUserName] = useState();
    //     const [password, setPassword] = useState();
    
    //     const handleSubmit = async e => {
    //         e.preventDefault();
    //         const status = await register({
    //             username,
    //             password
    //         });
            
    //         fetch

    //         if(username !== 'username-taken'){
    //             props.history.push('/createaccount' && alert('Account created successfully!'))
    //         } else {
    //             props.history.push('/createaccount' && alert('This account already exist. Please login or create a new account.'))
    //         }
    //     }

        return(
            <div className = "wrapper">

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
                        </div>
                        <div className="disclaimer">
                            <small >Already have an account?</small>
                            <button type ="link">Skip to Login</button> 
                        </div>              
                    </form>
                </div>
            </div>
        )
    }

export default withRouter(CreateAccount)