//Get a 7 days from now in given date format YYYY-MM-DD
export const getDateSevenDaysFromNow = () => {
  let currentDate = new Date();
  let sevenDaysFromNow = currentDate.setDate(currentDate.getDate() + 7);
  let result = new Date(sevenDaysFromNow).toISOString().split('T')[0];
  return result;
};
