const isValidDate = (date) => {
  const regex_date = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  return regex_date.test(date)
  // // Parse the date parts to integers
  // const parts   = dateString.split("-");
  // const day     = parseInt(parts[2], 10);
  // const month   = parseInt(parts[1], 10);
  // const year    = parseInt(parts[0], 10);

  // // Check the ranges of month and year
  // if(year < 1000 || year > 3000 || month == 0 || month > 12)
  // {
  //   return false;
  // }

  // var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

  // // Adjust for leap years
  // if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
  // {
  //     monthLength[1] = 29;
  // }

  // // Check the range of the day
  // return day > 0 && day <= monthLength[month - 1];
}

module.exports = isValidDate;