import { getCurrentDate } from '../utils/getCurrentDate';
import { getDateSevenDaysFromNow } from '../utils/getDateSevenDaysFromNow';
import { apiCall } from './apiCallHandler';

export const getWeahterForecast = async (apiKey: string, lon: string, lat: string): Promise<any> => {
  //
  return apiCall('GET', 'https://meteostat.p.rapidapi.com/point/hourly', {
    params: {
      lat,
      lon,
      start: `${getCurrentDate()}`,
      end: `${getDateSevenDaysFromNow()}`,
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'meteostat.p.rapidapi.com',
    },
  });
};
