//import {_saveQuestion, _getQuestions} from '../_DATA.js'

import { addQuestion, addQuestionAnswer } from '../util/API'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}


export function saveQuestion(question){
  return {
    type: SAVE_QUESTION,
    question,
  }
}

export function handleAddQuestion(optionOneText, optionTwoText, author){
  return (dispatch, getState)  =>
    {
      const { authedUser } = getState()

      return addQuestion({
        optionOneText: optionOneText,
        optionTwoText: optionTwoText,
        author: authedUser
      })
        .then((poll) => dispatch(saveQuestion(poll)))
    }
}


export function saveQuestionAnswer(authedUser, qid, answer){
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  }

}


export function handleAddQuestionAnswer(qid, answer){
  return (dispatch, getState) =>
    {
      const { authedUser } = getState()

      return addQuestionAnswer({
        authedUser: authedUser,
        qid: qid,
        answer: answer
      })
        .then(() => dispatch(saveQuestionAnswer(authedUser, qid, answer)))

    }

}
