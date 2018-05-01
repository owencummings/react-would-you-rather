import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddQuestionAnswer } from '../actions/questions'
import QuestionListElement from './questionListElement'

class Question extends Component{

  handleVoteOption1 = (e) => {
    e.preventDefault
    const {dispatch, questionId} = this.props
    dispatch(handleAddQuestionAnswer(questionId, 'optionOne'))
  }

  handleVoteOption2 = (e) => {
    e.preventDefault
    const {dispatch, questionId} = this.props
    dispatch(handleAddQuestionAnswer(questionId, 'optionTwo'))
  }

  render(){
    const questions = this.props.questions
    const id = this.props.questionId


    if (questions[id] === undefined){
      return (
        <div className='para'>
          404 Error!
          <br/>
          <br/>
          Please return to the home page.
        </div>
      )


    } else {




      const userPhoto = this.props.users[questions[id].author].avatarURL
      const users = this.props.users
      const authedUser = this.props.authedUser

      var style1 = {}
      var style2 = {}



      if (questions[id].optionOne.votes.includes(authedUser)){
        style1= {
          fontWeight: '700',
          fontSize: '1.2em',
          color: '#222'
        }
      }


      if (questions[id].optionTwo.votes.includes(authedUser)){
        style2 = {
          fontWeight: '700',
          fontSize: '1.2em',
          color: '#222'
        }
      }

      return(
        <div>
          <br/>
          <img className='userIcon' src={userPhoto} />
          <div className='para'>
            {users[questions[id].author].name} asks...
          </div>
          <div className='para'>
            Would You Rather
          </div>
          <div className='optionsContainer'>
            <div className='option'>
              <div style={style1}>
                {questions[id].optionOne.text}
              </div>
              {Object.keys(users[authedUser].answers).includes(id) &&
                <div>
                  <br/>
                  <div>
                    {questions[id].optionOne.votes.length} vote{questions[id].optionOne.votes.length !== 1 && 's'}, {questions[id].optionOne.votes.length/(questions[id].optionOne.votes.length +questions[id].optionTwo.votes.length)*100}%
                </div>
                </div>
              }

              {!Object.keys(users[authedUser].answers).includes(id) &&
                <button className='smallBtn' onClick={this.handleVoteOption1}> Vote</button>

              }
            </div>

            <div   className='or'>
              <div>
                or
              </div>
            </div>

            <div className='option'>
              <div style={style2}>
                {questions[id].optionTwo.text}
              </div>


              {Object.keys(users[authedUser].answers).includes(id) &&
                <div>
                  <br/>
                  <div>
                    {questions[id].optionTwo.votes.length} vote{questions[id].optionTwo.votes.length !== 1 && 's'}, {questions[id].optionTwo.votes.length/(questions[id].optionOne.votes.length +questions[id].optionTwo.votes.length)*100}%
                </div>
                </div>
              }

              {!Object.keys(users[authedUser].answers).includes(id) &&
                <button className='smallBtn' onClick={this.handleVoteOption2}> Vote</button>

              }
            </div>
          </div>

        </div>
      )
    }
  }
}


function mapStateToProps({ authedUser, questions, users }, props){
  return {
    authedUser: authedUser,
    questions: questions,
    users: users,
    questionId: props.match.params.id
  }
}


export default connect(mapStateToProps)(Question)
