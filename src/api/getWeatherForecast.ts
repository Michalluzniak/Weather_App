import { getCurrentDate } from '../utils/getCurrentDate';
import { getDateSevenDaysFromNow } from '../utils/getDateSevenDaysFromNow';
import { apiCall } from './apiCallHandler';

export const getWeahterForecast = async (apiKey: string, cityName: string): Promise<any> => {
  //
  return apiCall('GET', 'https://api.weatherbit.io/v2.0/forecast/daily', {
    params: {
      key: apiKey,
      city: cityName,
    },
  });
};
