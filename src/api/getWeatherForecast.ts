import { getCurrentDate } from '../utils/getCurrentDate';
import { getDateSevenDaysFromNow } from '../utils/getDateSevenDaysFromNow';
import { apiCall } from './apiCallHandler';

export const getWeahterForecast = async (apiKey: string, cityName: string): Promise<any> => {
  //
  return apiCall('GET', 'https://meteostat.p.rapidapi.com/point/daily', {
    params: {
      lat: '43.6667',
      lon: '-79.4',
      start: `${getCurrentDate()}`,
      end: `${getDateSevenDaysFromNow()}`,
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'meteostat.p.rapidapi.com',
    },
  });
};
