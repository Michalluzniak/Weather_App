//Get a date in given format YYYY-MM-DD
export const getCurrentDate = () => {
  const result = new Date().toISOString().split('T')[0];
  return result;
};
