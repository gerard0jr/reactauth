import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import AddAuthor from './components/authors/AddAuthor';
import AuthorList from './components/authors/AuthorList';
import AuthPage from './components/auth/AuthPage'
import ProfilePage from './components/authors/ProfilePage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home }/>
    {/* <Route exact path="/api/authors" component={ AddAuthor }/> */}
    <Route exact path="/api/authors" component={ AuthorList }/>
    <Route path="/signup" component={ AuthPage }/>
    <Route path="/login" component={ AuthPage }/>
    <Route path="/profile" component={ ProfilePage }/>
  </Switch>
)

export default Routes;