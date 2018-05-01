import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/authedUser';


class Navbar extends Component{

  handleLogout = (e) => {
    this.props.dispatch(logoutUser())
  }

  render(){
    return (
      <div className='navBarOuter'>
        <div className='navBarContainer'>
          <Link to='/'>
            <button className='smallBtn'>
              Home
            </button>
          </Link>
          <Link to='/add'>
            <button className='smallBtn'>
              Add Poll
            </button>
          </Link>
          <Link to='/leaderboard'>
            <button className='smallBtn'>
              Leaderboard
            </button>
          </Link>
          <div>
            { this.props.authedUser === null
              ? <span></span>
              : <button className='smallBtn' onClick={this.handleLogout}>Log Out </button>
            }
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Navbar)
