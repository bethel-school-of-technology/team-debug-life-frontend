import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import GamePage from './components/Game/GamePage.js';
import Login from './components/Login/Login.js'
import useToken from './useToken';
import CreateAccount from './components/Create-account/CreateAccount.js';

function App() {
  const { token, setToken } = useToken();


  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <Login setToken={setToken} />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/preferences'>
            <Preferences />
            </Route>
          <Route path = '/CreateAccount'>
            <CreateAccount />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

