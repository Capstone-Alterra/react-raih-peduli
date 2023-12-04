const toIsoDate = (date) => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();
};

export default toIsoDate;
