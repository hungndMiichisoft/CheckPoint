/*
 *
 * HomeScreen reducer
 *
 */
import produce from 'immer';
import { 
  CHANGE_DATE,
  CHANGE_MONTH,
  CHANGE_YEAR,  
} from './constants';

export const initialState = {
  date: new Date(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

/* eslint-disable default-case, no-param-reassign */
const homeScreenReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_DATE: {
        draft.date = action.date;
        break;
      }

      case CHANGE_MONTH: {
        console.log(action.month)
        draft.month = action.month;
        break;
      }

      case CHANGE_YEAR: {
        draft.year = action.year;
        break;
      }
    }
  });

export default homeScreenReducer;
