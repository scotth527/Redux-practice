import { UPDATE_USER } from '../actions/updateUser.js';

export default function userReducer(state= '', {type, payload}) {
  switch (type) {
    case UPDATE_USER:
      return payload;
    default:
      return state;
  }
  return state;
}
