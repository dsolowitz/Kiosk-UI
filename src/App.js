import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import MainRoute from './components/MainRoute';

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/" component={MainRoute} />
            <Route exact path="/:accountid/:locationid" component={MainRoute} />
            <Route exact path="/:accountid/:locationid/ti/:templateinstanceid" component={MainRoute} />
            <Route exact path="/:accountid/:locationid/t/:templateid" component={MainRoute} />
        </Switch>
      </Router>
  );
}

export default App;
