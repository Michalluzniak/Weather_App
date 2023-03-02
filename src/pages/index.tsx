import { getWeahterForecast } from '@/api/getWeatherForecast';
import { GetServerSideProps } from 'next';

export default function Home() {
  return (
    <div>
      <p className="">Hello world</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  getWeahterForecast(process.env.WEATHER_FORECAST_API_KEY, 'New York');

  return {
    props: {},
  };
};
