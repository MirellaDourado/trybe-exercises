const isValidDate = (date) => {
  const regex_date = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  return regex_date.test(date)
}

module.exports = isValidDate;