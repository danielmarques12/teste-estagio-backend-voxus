import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Post from './pages/Post';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/post/:id" component={Post} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
