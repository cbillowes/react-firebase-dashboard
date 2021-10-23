import React from 'react';
import Header from './Header';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { UserProvider } from './firebase/UserProvider';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ProfileRedirect from './router/ProfileRedirect';
import PrivateRoute from './router/PrivateRoute';
import './App.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <div className="ui grid container">
            <Switch>
              <ProfileRedirect exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/profile/:id" component={Profile} />
              <ProfileRedirect exact path="/login" component={Login} />
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
