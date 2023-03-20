// import { getWeahterForecast } from "@/api/getWeatherForecast";
import { getCitiesList } from "@/api/apiCitiesList";
import getBackgroundImage from "@/api/backgroundImage/getBackgroundImage";
import { getWeahterForecast } from "@/api/getWeatherForecast";
import { getWeatherIcons } from "@/api/getWeatherIcons";
import reverseGeocoding from "@/api/timezoneAndGeocoding/reverseGeocoding";
import { MainLayout } from "@/components/layouts/MainLayout";

import { GetServerSideProps } from "next";

import dataMock from "../../mocks/weatherApiMock.json";

interface ApiDataProps {
    weatherData: { [key: string]: string };
    city_name: string;
}

export default function Home(data: any) {
    return <MainLayout data={data} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cityNameQuery = context.query.city as string;

    console.log(context.resolvedUrl);

    const weatherData =
        // dataMock.data;
        await getWeahterForecast(
            process.env.WEATHER_FORECAST_API_KEY,
            cityNameQuery
        );

    const lat = weatherData.lat;
    // const lat = dataMock.data.lat;
    const lon = weatherData.lon;
    // const lon = dataMock.data.lon;

    const weatherIconsApiCall = await getWeatherIcons();
    const weatherIcons = weatherIconsApiCall.data;

    const timezone: any = await reverseGeocoding(
        process.env.REVERSE_GEOCODING_API_KEY,
        lat,
        lon
    );

    const cityNameFromTimezoneApi = timezone.features[0].properties.city;

    const backgroundImage = await getBackgroundImage(
        process.env.UNSLPASH_IMAGES_API_KEY,
        cityNameFromTimezoneApi
    );

    const citiesList = await getCitiesList();

    if (cityNameQuery === "") {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }

    return {
        props: {
            weatherData,
            backgroundImage,
            weatherIcons,
            timezone,
            citiesList
        }
    };
};
