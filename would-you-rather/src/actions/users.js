//import { _getUsers } from '../_DATA.js';

export const RECEIVE_USERS = 'RECEIVE USERS';

export function receiveUsers(users){
  return {
    type: RECEIVE_USERS,
    users,
  }
}
