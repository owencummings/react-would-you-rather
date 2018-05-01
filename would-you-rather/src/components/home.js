import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './login';
import Dashboard from './dashboard';

class Home extends Component{
  render(){

    return(
      <div>
        This is the home component.

        {this.props.authedUser !== null
          ? <Dashboard />
          : <Login />
        }

      </div>
    )
  }
}

  function mapStateToProps({ authedUser, questions }){
    return {
      authedUser: authedUser,
      questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
  }


export default connect(mapStateToProps)(Home)
