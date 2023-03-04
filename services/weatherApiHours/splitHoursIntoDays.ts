export const splitHoursIntoDays = async (apiResponse: any) => {
  apiResponse.data.reduce(async (objectsByKeyValue: any, obj: any) => {
    const value = obj['name'];
    // console.log(value);
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    console.log(objectsByKeyValue);
    return objectsByKeyValue;
  }, {});
};
