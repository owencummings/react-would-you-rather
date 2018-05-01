import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authedUser';

class LoginListElement extends Component{
  state = {
    toHome: false
  }

  handleLogin = (e) => {
    console.log(this.props.user)
    this.props.dispatch(loginUser(this.props.user.id))
    this.setState(() => ({
      toHome: true
    }))


  }

  render(){
    const { toHome } = this.state



    const user = this.props.user
    console.log(this.props)

    const style={
      backgroundImage: user.avatarURL
    }


    return(
      <button className='btn' onClick={this.handleLogin}>
        <div className='loginElementContainer'>
          <img src={user.avatarURL} className='userIcon' />
          <div className='loginElementText'>
            {user.name}
          </div>
        </div>
      </button>
    )

  }
}

function mapStateToProps({ users }, { user }){
  return {
    user: users[user]
  }
}




export default connect(mapStateToProps)(LoginListElement)
