import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, Switch,CSSTransitionGroup } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.css';
import api from './../../api';
import BuildsPage from '../BuildsPage';
import HomePage from '../HomePage';
import { normalize, schema } from 'normalizr';
import Header from './../../components/Header/Header';
import NewBuild from './../../components/NewBuild';
import CurrentBuild from './../CurrentBuild';
import TimeLineContainer from './../TimeLineContainer';
import NoMatch from './../../components/noMatch';
import LoginPage from './../LoginPage';
import RegisterPage from './../RegisterPage';
import UserPage from './../UserPage';
import AddOrder from './../../components/BuildSingle/AddOrder';
import Home from './../../components/Home';
import InGameHelper from './../InGameHelper';
import EditBuildPage from './../EditBuildPage';


const RouteAndSub = (route) => (

  <Route path={route.path} render={props => (
      //nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          path: '/home',
          exact: true,
          component: Home
        },
        {
          path: '/builds/new',
          component: NewBuild
        },
        {
          path: '/builds',
          exact: true,
          component: BuildsPage,
        },
        {
          path: '/build/:id',
          exact: true,
          component: TimeLineContainer,
        },
        {
          path: '/login',
          component: LoginPage
        },
        {
          path: '/register',
          component: RegisterPage
        },
        {
          path: '/user/profile',
          component: UserPage
        },
        {
          path: '/build/:id/playing',
          component: InGameHelper
        },
        {
          path: '/build/:id/edit',
          component: EditBuildPage
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>  
      <Route exact path="/" render={() => (
          <Redirect to="/builds"/>
        )}/>
          {this.state.routes.map((route, i) => {
            return (
                <RouteAndSub key={i} {...route}/>
            )
          })}
        <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }

}

export default App;