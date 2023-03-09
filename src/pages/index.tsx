// import { getWeahterForecast } from "@/api/getWeatherForecast";
import getBackgroundImage from "@/api/backgroundImage/getBackgroundImage";
import { getWeahterForecast } from "@/api/getWeatherForecast";
import { getWeatherIcons } from "@/api/getWeatherIcons";
import forwardGeocoding from "@/api/timezoneAndGeocoding/forwardGeocoding";
import reverseGeocoding from "@/api/timezoneAndGeocoding/reverseGeocoding";
import { MainLayout } from "@/components/layouts/MainLayout";

import { GetServerSideProps } from "next";

import dataMock from "../../mocks/weatherApiMock.json";
import { forwardGeocoding } from "../../services/forwardGeocoding";

interface ApiDataProps {
    weatherData: { [key: string]: string };
    city_name: string;
}

export default function Home(data: any) {
<<<<<<< Updated upstream
    console.log(data.backgroundImage);
    return <>{<MainLayout data={data} />}</>;
=======
    return <MainLayout data={data} />;
>>>>>>> Stashed changes
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cityNameQuery = context.query.city as string;

    // const weatherData = await getWeahterForecast(
    //     process.env.WEATHER_FORECAST_API_KEY,
    //     cityNameQuery
    // );
<<<<<<< Updated upstream
    const backgroundImage = await getBackgroundImage(cityNameQuery);
=======

    const backgroundImage = await getBackgroundImage(
        process.env.UNSLPASH_IMAGES_API_KEY,
        cityNameQuery
    );
>>>>>>> Stashed changes

    const weatherIconsApiCall = await getWeatherIcons();
    const weatherIcons = weatherIconsApiCall.data;

<<<<<<< Updated upstream
    const cityNameToCoordinates = await forwardGeocoding(
        process.env.FORWARD_GEOCODING_API_KEY,
=======
    const timezone = await forwardGeocoding(
        process.env.TIMEZONE_API_KEY,
>>>>>>> Stashed changes
        cityNameQuery
    );

    const timezone = await getTimezone(
        cityNameToCoordinates[0].lat,
        cityNameToCoordinates[0].lon
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
