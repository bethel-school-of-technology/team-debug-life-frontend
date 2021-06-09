
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormButton } from "../formFields";
import TextLink from "../textLink";

class SignupForm extends Component {
  render() {
    return (
      <form className="sign-up-form">
        <FormTitle className="sign-up-form__title" text="Login" />
        <Field
          className="sign-up-form__email"
          placeholder="Enter Email"
          name="email"
          type="email"
          title="Email"
          component={FormInput}
        />
        <Field
          className="sign-up-form__password"
          placeholder="Enter Password"
          name="password"
          type="password"
          title="Password"
          component={FormInput}
        />
        <Field
          className="sign-up-form__login"
          name="login"
          type="submit"
          title="Login"
          component={FormButton}
        />
        <div className='sign-up-form__text-links'>
            <TextLink to='/forgot' text='Forgot Password'/>
            <TextLink to='/signup' text='Not a member? Register here'/>
        </div>

      </form>
    );
  }
}

SignupForm = reduxForm({
  form: "signup"
})(SignupForm);

export default SignupForm;