import React, { Component } from 'react';
import "./create-account.css";

class App extends Component {
    render() {
        return(
            <div className = "wrapper">
                <div className = "form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit = {this.handlesubmit} noValidate>
                        <div className = "Username">
                            <label htmlFor= "Username">Username</label>
                            <input type= "text" 
                            ClassName= "" 
                            placeholder = "Username" 
                            type ="text" 
                            name = "Username"
                            noValidate
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className = "Password">
                            <label htmlFor= "Paswword">Password</label>
                            <input type= "text" 
                            ClassName= "" 
                            placeholder = "Password" 
                            type ="text" 
                            name = "Password"
                            noValidate
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className = "Email">
                            <label htmlFor= "Email">Email</label>
                            <input type= "text" 
                            ClassName= "" 
                            placeholder = "Email" 
                            type ="text" 
                            name = "Email"
                            noValidate
                            onChange={this.handleChange}
                            />
                        </div>
                        <div claaName ="createAccount">
                          <button type="submit">Create Account</button>
                          <small>Already have an account?</small>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default App; 