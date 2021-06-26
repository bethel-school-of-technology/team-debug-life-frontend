import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import GamePage from './components/Game/GamePage.js';
import useToken from './useToken';
import Login from './components/Forms/Login/Login.js';
import CreateAccount from './components/Forms/Create-account/CreateAccount.js';

function App() {
  const { token, setToken } = useToken();

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <Login setToken={setToken} />
          </Route>
          <Route path = '/register'>
            <CreateAccount />
          </Route>
          <Route path='/game'>
            <GamePage userToken={token} />
          </Route>
          <Redirect from='/' to="/game" />
        </Switch>
      </BrowserRouter>
    </div>
  ); 
}

export default App;

