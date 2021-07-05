import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import GamePage from './components/Game/GamePage.js';
import GamePage2 from './components/Game/GamePage2.js';
import GamePage3 from './components/Game/GamePage3.js';
import GamePage4 from './components/Game/GamePage4.js';
import GamePage5 from './components/Game/GamePage5.js';
import GameEnd from './components/Game/GameEnd';
import GameOver from './components/Game/GameOver';
import useToken from './useToken';
import Login from './components/Forms/Login/Login.js';
import CreateAccount from './components/Forms/Create-account/CreateAccount.js';
import TimePage from './components/Game/TimePage';

function App() {
  const { token, setToken } = useToken();

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Switch>
          <Route path='/login'>
            <Login setToken={setToken} />
          </Route>
          <Route path = '/createaccount'>
            <CreateAccount />
          </Route>
          <Route path='/game'>
            <GamePage userToken={token} />
          </Route>
          <Route path='/game2'>
            <GamePage2 userToken={token} />
          </Route>
          <Route path='/game3'>
            <GamePage3 userToken={token} />
          </Route>
          <Route path='/game4'>
            <GamePage4 userToken={token} />
          </Route>
          <Route path='/game5'>
            <GamePage5 userToken={token} />
          </Route>
          <Route path='/gameEnd'>
            <GameEnd userToken={token} />
          </Route>
          <Route path='/gameOver'>
            <GameOver userToken={token} />
          </Route>
          
          
          <Route path='/timer'>
            <TimePage userToken={token} />
          </Route>
          
          
          <Redirect from='/' to="/game" />
        </Switch>
      </BrowserRouter>
    </div>
  ); 
}



export default App;

