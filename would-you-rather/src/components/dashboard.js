import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionListElement from './questionListElement'
import { Link, withRouter } from 'react-router-dom'

class Dashboard extends Component{

  state = {
    showing: 'unanswered'
  }


  changeToUnanswered = () =>
    this.setState(() =>({
      showing: 'unanswered'
    }))


  changeToAnswered = () =>
    this.setState(() => ({
      showing: 'answered'
    }))


  render(){

    const authedUser = this.props.authedUser
    const questions = this.props.questions
    const answeredPollIds = this.props.questionIds.filter((id) =>
      (questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)))

    const unansweredPollIds = this.props.questionIds.filter((id) =>
      !(questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)))

    return (
      <div>
        <div className='para'>
          <img src={this.props.users[this.props.authedUser].avatarURL}  className='userIcon'/>
        </div>

        <div className='para'>

        Hey, {this.props.users[this.props.authedUser].name}. Here are your {this.state.showing} polls.
        </div>

        <div>
          <button className='smallBtn' onClick={this.changeToUnanswered}> Unanswered</button>
          <button className='smallBtn' onClick={this.changeToAnswered}> Answered </button>
        </div>


        {this.state.showing === 'unanswered' &&
        <div>
          {unansweredPollIds.map((id)=>
              <Link to={`/question/${id}`} style={{textDecoration: 'none'}} key={id}>
                <QuestionListElement iden={id} />
              </Link>
          )}
        </div>
        }

        {this.state.showing === 'answered' &&
        <div>
          {answeredPollIds.map((id)=>
            <Link to={`/question/${id}`} style={{textDecoration: 'none'}} key={id}>
              <QuestionListElement iden={id} />
            </Link>
          )}
        </div>
        }

      </div>
    )
  }
}


function mapStateToProps({questions, authedUser, users}){
  return {
    authedUser: authedUser,
    questionIds: Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    users: users,
    questions: questions
  }

}

export default withRouter(connect(mapStateToProps)(Dashboard))
