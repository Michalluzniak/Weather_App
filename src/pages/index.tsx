// import { getWeahterForecast } from "@/api/getWeatherForecast";
import getBackgroundImage from "@/api/backgroundImage/getBackgroundImage";
import { getWeahterForecast } from "@/api/getWeatherForecast";
import { getWeatherIcons } from "@/api/getWeatherIcons";
import getTimezone from "@/api/timezone";
import { MainLayout } from "@/components/layouts/MainLayout";
import { GetServerSideProps } from "next";
import dataMock from "../../mocks/weatherApiMock.json";

interface ApiDataProps {
    weatherData: { [key: string]: string };
    city_name: string;
}

export default function Home(data: any) {
    console.log(data.timezone);
    return <MainLayout data={data} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cityNameQuery = context.query.city as string;

    // const weatherData = await getWeahterForecast(
    //     process.env.WEATHER_FORECAST_API_KEY,
    //     cityNameQuery
    // );
    const backgroundImage = await getBackgroundImage(
        process.env.UNSLPASH_IMAGES_API_KEY,
        cityNameQuery
    );

    const weatherIconsApiCall = await getWeatherIcons();
    const weatherIcons = weatherIconsApiCall.data;

    const timezone = await getTimezone(
        process.env.TIMEZONE_API_KEY,
        cityNameQuery
    );

    return {
        props: {
            data: dataMock.data,
            weatherIcons,
            timezone,
            backgroundImage
        }
    };
};
