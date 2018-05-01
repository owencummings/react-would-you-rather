import React, { Component } from 'react';
import { connect } from 'react-redux';

class RequireLogin extends Component{
  render(){
    return (
      <div>
        You need to log in to access this. Please navigate to home page and come back.
      </div>
    )
  }
}

export default RequireLogin
