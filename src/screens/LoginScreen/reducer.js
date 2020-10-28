/*
 *
 * LoginScreen reducer
 *
 */
import produce from 'immer';
import { 
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
} from './constants';

export const initialState = {
  username: '',
  password: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginScreenReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME: {
        draft.username = action.username;
        break;
      }

      case CHANGE_PASSWORD: {
        draft.password = action.password;
        break;
      }
    }
  });

export default loginScreenReducer;
