import { N_DATES } from './constants';

export function getMaxDate(date) {
  var activeMonth = date.getMonth();
  var activeYear = date.getFullYear();
  var maxDate = N_DATES[activeMonth];
  if (((activeYear % 4 === 0 && activeYear % 100 !== 0) || activeYear % 400 === 0) && activeMonth === 1) {
    maxDate += 1;
  }
  return maxDate;
}

export function genarateWeekDate(date) {
  var list = [];
  var activeDay = date.getDay();
  var activeDate = date.getDate();
  var maxDate = getMaxDate(date);

  if (activeDay === 0) {
    activeDay = 7;
  }

  for (var s = activeDay; s >= 1; s--) {
    var date = activeDate - s + 1;
    if (date < 1) {
      date = maxDate + date;
    }
    list.push(date);
  }

  for (var s = 1; s <= 7 - activeDay; s++) {
    var date = activeDate + s;
    if (date > maxDate) {
      date = date - maxDate;
    }
    list.push(date);
  }
  return list;
}