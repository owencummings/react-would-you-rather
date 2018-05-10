import * as API from '../util/API.js';

import { receiveUsers } from './users.js';
import { receiveQuestions, saveQuestion } from './questions.js';
import { loginUser } from './authedUser.js'
//import {loginUser, logoutUser } from './authedUser.js';



export function handleInitialData(){
  return (dispatch) => {
    return API.getInitialData().then(({users, questions}) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions))
      })
  }
}



/*

export function handleLogin(id){ //is this right?
  return (dispatch) => {
    dispatch(loginUser(id))
  }
}

export function handleLogout(){
    return (dispatch) => {
      dispatch(logoutUser())
    }
}

*/
