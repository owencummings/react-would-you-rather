import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginListElement from './loginListElement'
import { Redirect } from 'react-router-dom'

class Login extends Component{

  render(){
    return (
      <div>
        <div className='para'>
        Click a profile to log in.
        </div>


          {this.props.userIds.map((id) =>
            <div key={id}>
              <LoginListElement user={id}/>
            </div>

          )}

      </div>
    )
  }
}

function mapStateToProps({ users }){
  return {
    userIds: Object.keys(users)
  }

}

export default connect(mapStateToProps)(Login)
