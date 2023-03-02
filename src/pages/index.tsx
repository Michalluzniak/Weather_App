import { getWeahterForecast } from '@/api/getWeatherForecast';
import { GetServerSideProps } from 'next';
import { forwardGeocoding } from '../../services/forwardGeocoding';

export default function Home() {
  return (
    <div>
      <p className="">Hello world</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const forwardGeocodingData = await forwardGeocoding(process.env.FORWARD_GEOCODING_API_KEY, 'New york');
    console.log(forwardGeocodingData);
  } catch (error) {
    console.log(error);
  }
  try {
    const getWeahterForecastData = await getWeahterForecast(process.env.WEATHER_FORECAST_API_KEY, 'New York');
    // console.log(getWeahterForecastData);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {},
  };
};
