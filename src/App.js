import React, { Component } from 'react';
import "./create-account.css";

    
class App extends Component {

  constructor(props) {
    super (props);

    this.state = {
        username: "",
        email : "",
        password: "",
        formErrors: {
            username: "",
            email: "",
            password: ""
        }
    }
}

  handleSubmit = e => {
   e.preventDefault();
  }
  
  render() {
        return(
            <div className = "wrapper">
                <div className = "form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit = {this.handlesubmit} noValidate>
                        <div className = "username">
                            <label htmlFor= "Username">Username</label>
                            <input type= "text" 
                            ClassName= "" 
                            placeholder = "username" 
                            type ="username" 
                            name = "username"
                            noValidate
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className = "password">
                            <label htmlFor= "paswword">Password</label>
                            <input type= "text" 
                            ClassName= "" 
                            placeholder = "Password" 
                            type ="password" 
                            name = "password"
                            noValidate
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className = "email">
                            <label htmlFor= "email">email</label>
                            <input type= "text" 
                            ClassName= "" 
                            placeholder = "Email" 
                            type ="email" 
                            name = "email"
                            noValidate
                            onChange={this.handleChange}
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
}

export default App; 