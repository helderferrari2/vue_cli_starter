export const handleErrorResponse = error => {
  let messages = error.response.data.errors;
  if (typeof messages != "string") {
    return Object.values(messages).map(item => item[0]);
  }
  return [messages];
};
