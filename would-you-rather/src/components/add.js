import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions'

class Add extends Component{

  state = {
    text1: '',
    text2: ''
  }


  handleChange1 = (e) => {
    const text = e.target.value
    this.setState(() => ({
      text1: text
    }))
  }

  handleChange2 = (e) => {
    const text = e.target.value
    this.setState(() => ({
      text2: text
    }))
  }

  handleSubmit = (e) => {
  e.preventDefault()

  const { text1, text2 } = this.state
  const { dispatch, id } = this.props

  dispatch(handleAddQuestion(text1, text2, id))

  this.setState(() => ({
    text1: '',
    text2: ''
    //toHome: id ? false : true,
  }))
}



  render(){

    const text1 = this.state.text1
    const text2 = this.state.text2

    return(
      <div>
        <div className='para'>
          <img src={this.props.avatar}  className='userIcon'/>
        </div>
        <div className='para'>
          Create a new Poll
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='addTextArea'>
            <textarea
               placeholder='Option One'
               value={text1}
               onChange={this.handleChange1}
               maxLength={60}
             />

             <textarea
                placeholder='Option Two'
                value={text2}
                onChange={this.handleChange2}
                maxLength={60}
              />
          </div>
            <div>
            <button
              className='smallBtn'
              type='submit'
              disabled={text1 === '' || text2 === ''}>
              Submit
            </button>
            </div>

        </form>
      </div>

    )
  }
}


function mapStateToProps({ users, authedUser}){
  return {
  avatar: users[authedUser].avatarURL
  }
}

export default connect(mapStateToProps)(Add)
