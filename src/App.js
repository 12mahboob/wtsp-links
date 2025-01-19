// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin-login" component={AdminLogin} />
          <Route path="/admin-panel" component={AdminPanel} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
