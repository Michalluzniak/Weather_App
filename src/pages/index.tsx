import { getWeahterForecast } from '@/api/getWeatherForecast';
import { GetServerSideProps } from 'next';
import { forwardGeocoding } from '../../services/forwardGeocoding';

interface ApiDataProps {
  weatherData: { [key: string]: string };
  cityName: string;
}

export default function Home(data: ApiDataProps) {
  console.log(data);
  return (
    <div>
      <p className="">Hello world</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const forwardGeocodingData = await forwardGeocoding(process.env.FORWARD_GEOCODING_API_KEY, 'New york');

  const cityName = forwardGeocodingData[0].display_name;
  const lon = forwardGeocodingData[0].lon;
  const lat = forwardGeocodingData[0].lat;

  const WeahterForecastData = await getWeahterForecast(process.env.WEATHER_FORECAST_API_KEY, lon, lat);
  console.log(WeahterForecastData);

  return {
    props: {
      data: {
        weatherData: WeahterForecastData,
        cityName,
      },
    },
  };
};
