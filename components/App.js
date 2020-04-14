import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import Article from './Article';

import { CommonStyles } from '../styles/App';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/article/:slug">
            <Article />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <style jsx global>{`
          body {
            font-family: Roboto, sans-serif;
            margin: 0;
          }
        `}</style>
      </div>
    </Router>
  );
}
