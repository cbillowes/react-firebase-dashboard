import React from 'react';
import Header from './Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProfileRedirect from './router/ProfileRedirect';
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
              <ProfileRedirect exact path="/login" component={Login} />
              <ProfileRedirect exact path="/signup" component={Signup} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
