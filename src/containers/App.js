import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import '../styles/App.css';

import Home from "./Home";
import Favourites from './Favourites';

class App extends Component {
  render() {
    return (
      <main className='frame'>
          <Switch>
            <Route path="/" exact strict component={Home} />
            <Route path="/favourites" component={Favourites} />
          </Switch>
        </main>
    );
  }
}

export default withRouter(App);
