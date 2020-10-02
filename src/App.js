import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Browse from './components/Browse';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/browse">
            <Header />
            <Browse />
          </Route>
          <Redirect from="/" to="/browse" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
