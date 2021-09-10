import React from 'react';
import {
  Switch,
  Route,
  HashRouter as Router,
} from 'react-router-dom';
import './style/app.css';
import Home from './pages/Home';
import Header from './components/Header';
import NotMatch from './pages/NotMatch';
import SportsList from './pages/SporstList';

const App = () => (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sports/:slug">
          <SportsList />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
