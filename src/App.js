import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
