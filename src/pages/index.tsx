// import { getWeahterForecast } from "@/api/getWeatherForecast";
import { getWeatherIcons } from "@/api/getWeatherIcons";
import { MainLayout } from "@/components/layouts/MainLayout";
import { GetServerSideProps } from "next";
import dataMock from "../../mocks/weatherApiMock.json";

interface ApiDataProps {
    weatherData: { [key: string]: string };
    city_name: string;
}

export default function Home(data: any) {
    return <>{<MainLayout data={data} />}</>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // const data = await getWeahterForecast(
    //     process.env.WEATHER_FORECAST_API_KEY,
    //     "Copenhagen"
    // );
    const weatherIconsApiCall = await getWeatherIcons();
    const weatherIcons = weatherIconsApiCall.data;

    return {
        props: {
            data: dataMock.data,
            weatherIcons
        }
    };
};
