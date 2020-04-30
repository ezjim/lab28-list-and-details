import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ListPage from '../../containers/ListPage/ListPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListPage} />
      </Switch>
    </Router>
  );
}
