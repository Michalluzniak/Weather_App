import axios from 'axios';
import { getCurrentDate } from '../utils/getCurrentDate';
import { getDateSevenDaysFromNow } from '../utils/getDateSevenDaysFromNow';

export const getWeahterForecast = (apiKey: string, cityName: string) => {
  const options = {
    method: 'GET',
    url: 'https://meteostat.p.rapidapi.com/point/daily',
    params: {
      lat: '43.6667',
      lon: '-79.4',
      start: `${getCurrentDate()}`,
      end: `${getDateSevenDaysFromNow()}`,
      limit: '7',
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'meteostat.p.rapidapi.com',
    },
  };

  console.log(getCurrentDate());
  console.log(getDateSevenDaysFromNow());

  axios
    .request(options)
    .then(function (response: any) {
      console.log(response.data);
    })
    .catch(function (error: any) {
      // console.error(error);
    });
};
