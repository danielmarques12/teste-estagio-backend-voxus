import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Post from './pages/Post';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route path="/post/:id" component={Post} />
        <Route path="/posts/create" component={CreatePost} />
        <Route path="/posts/edit/:id" component={EditPost} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
