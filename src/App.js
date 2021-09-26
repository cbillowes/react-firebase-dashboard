import React from 'react';
import Header from './Header';
import Signup from './pages/Signup';
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
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
