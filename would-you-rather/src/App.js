import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';
import Add from './components/add';
import Leaderboard from './components/leaderboard';
import Question from './components/question';
import Navbar from './components/navbar';
import Login from './components/login';

import { Route, HashRouter, Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared'

class App extends Component {


  componentDidMount(){
    console.log('We in here!')
    this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <div className="App">

        <HashRouter>
        {this.props.authedUser === null
        ? <Login />
        :
          <div>
          <Redirect to='/' />
          <Navbar />
            <div>
              <Route exact path='/' render={() => (
                <Dashboard />
              )}/>
              <Route exact path='/add' render={() => (
                <Add />
              )}/>
              <Route exact path='/leaderboard' render={() => (
                <Leaderboard />
              )}/>
              <Route exact path='/question/:id' component={Question}/>
            </div>
          </div>
      }
      </ HashRouter>
      </div>
    );
  }
}


function mapStateToProps({authedUser}){
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(App);
