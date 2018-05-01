import React, { Component } from 'react';
import { connect } from 'react-redux';


class LeaderboardListElement extends Component{
  render(){

    return(
    <div className='leaderboardElementContainer'>
      <img className='userIcon' src={this.props.avatar} />
      <div className='leaderboardElementItem'>
        {this.props.name}
      </div>
      <div className='leaderboardElementItem'>
        {this.props.asked} asked
      </div>
      <div className='leaderboardElementItem'>
        {this.props.answered} answered
      </div>
    </div>
    )
  }

}


function mapStateToProps({users}, { iden }){
  return {
    avatar: users[iden].avatarURL,
    name: users[iden].name,
    asked: users[iden].questions.length,
    answered: Object.keys(users[iden].answers).length
  }
}

export default connect(mapStateToProps)(LeaderboardListElement)
