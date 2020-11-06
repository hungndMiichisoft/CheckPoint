/*
 *
 * HomeScreen actions
 *
 */

import { 
  CHANGE_DATE,
  CHANGE_MONTH,
  CHANGE_YEAR,  
} from './constants';

export function changeDate(date) {
  return {
    type: CHANGE_DATE,
    date,
  };
}

export function changeMonth(month) {
  return {
    type: CHANGE_MONTH,
    month,
  };
}

export function changeYear(year) {
  return {
    type: CHANGE_YEAR,
    year,
  };
}