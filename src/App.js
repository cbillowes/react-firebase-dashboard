import React from 'react';
import Header from './Header';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import './App.css';
import './firebase/config';

function App() {
  return (
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
  );
}

export default App;
