import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderboardListElement from './leaderboardListElement'

class Leaderboard extends Component{




  render(){

    const users = this.props.users

    return(
      <div>
        <div className='para'>
        The best of the 'Would You Rather' platform
        </div>

        <ul>
          {this.props.sortedUserIds.map((id) =>
            <LeaderboardListElement key={id} iden={id}/>

          )}

        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }){
  return {
    users: users,
    sortedUserIds: Object.keys(users)
    .sort((a,b) => users[b].questions.length + Object.keys(users[b].answers).length - users[a].questions.length - Object.keys(users[a].answers).length)
  }

}

export default connect(mapStateToProps)(Leaderboard)
