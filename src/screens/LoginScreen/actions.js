/*
 *
 * LoginScreen actions
 *
 */

import { 
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
} from './constants';

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function changePassoword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}