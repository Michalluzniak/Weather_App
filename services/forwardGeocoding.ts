import { apiCall } from '@/api/apiCallHandler';

interface ForwardGeocodingPromise {
  display_name: string;
  lon: string;
  lat: string;
}

export const forwardGeocoding = async (apiKey: string, cityName: string): Promise<any> => {
  //
  return apiCall('GET', 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward', {
    params: {
      city: 'New York',
      polygon_threshold: '0.0',
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com',
    },
  });
};
