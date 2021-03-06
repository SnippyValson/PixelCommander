import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
