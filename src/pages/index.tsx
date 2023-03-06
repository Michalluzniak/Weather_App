// import { getWeahterForecast } from "@/api/getWeatherForecast";
import { getWeahterForecast } from "@/api/getWeatherForecast";
import { getWeatherIcons } from "@/api/getWeatherIcons";
import getTimezone from "@/api/timezone";
import { MainLayout } from "@/components/layouts/MainLayout";
import { GetServerSideProps } from "next";
import dataMock from "../../mocks/weatherApiMock.json";
import { forwardGeocoding } from "../../services/forwardGeocoding";

interface ApiDataProps {
    weatherData: { [key: string]: string };
    city_name: string;
}

export default function Home(data: any) {
    console.log(data.timezone);
    return <>{<MainLayout data={data} />}</>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const weatherData = await getWeahterForecast(
        process.env.WEATHER_FORECAST_API_KEY,
        "New York"
    );

    const weatherIconsApiCall = await getWeatherIcons();
    const weatherIcons = weatherIconsApiCall.data;

    const cityNameToCoordinates = await forwardGeocoding(
        process.env.FORWARD_GEOCODING_API_KEY,
        "New York"
    );

    const timezone = await getTimezone(
        cityNameToCoordinates[0].lat,
        cityNameToCoordinates[0].lon
    );

    return {
        props: {
            data: dataMock.data,
            weatherIcons,
            timezone
        }
    };
};
