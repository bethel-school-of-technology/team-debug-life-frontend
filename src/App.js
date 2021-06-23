import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import GamePage from './components/Game/GamePage.js';
import Login from './components/Login/Login.js'
import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <Login setToken={setToken} />
          </Route>
          <Route path='/game'>
            <GamePage userToken={token} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  ); 
}

export default App;