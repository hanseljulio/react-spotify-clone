import React from 'react';
import Playlist from './playlist';
import Nav from './nav';
import Song from './song';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Song}></Route>
          <Route path="/playlist" component={Playlist}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
