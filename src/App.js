import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login.js'
import Preferences from './components/Preferences/Preferences';
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
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/preferences'>
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;