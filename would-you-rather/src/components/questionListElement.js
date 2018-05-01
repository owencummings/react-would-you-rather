import React, { Component } from 'react';
import {connect} from 'react-redux';

class QuestionListElement extends Component{
  render(){
    return(
      <div className='questionListElementContainer'>
        <div className='questionListElementText'>
          {this.props.question.optionOne.text}
        </div>
        <div className='questionListElementText'>
          <img  className='userIcon' src={this.props.avatar} />
        </div>
        <div className='questionListElementText'>
          {this.props.question.optionTwo.text}
        </div>
      </div>
    )
  }
}


function mapStateToProps( {authedUser, users, questions}, { iden } ){
  return{
    question: questions[iden],
    avatar: users[questions[iden].author].avatarURL
  }


}



export default connect(mapStateToProps)(QuestionListElement)
