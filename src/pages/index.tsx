import { getWeahterForecast } from '@/api/getWeatherForecast';
import { MainLayout } from '@/components/layouts/MainLayout';
import { GetServerSideProps } from 'next';

interface ApiDataProps {
  weatherData: { [key: string]: string };
  city_name: string;
}

export default function Home({ data }: any) {
  // console.log(data);

  return (
    <>
      <MainLayout />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const data = await getWeahterForecast(process.env.WEATHER_FORECAST_API_KEY, 'Copenhagen');

  return {
    props: {
      // data
    },
  };
};
