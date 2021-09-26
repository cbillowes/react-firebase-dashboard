import React from 'react';
import Header from './Header';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { UserProvider } from './firebase/UserProvider';
import './App.css';
import './firebase/config';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <div className="ui grid container">
            <Switch>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:id" component={Profile} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
