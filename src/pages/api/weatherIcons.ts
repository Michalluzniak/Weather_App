// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    //Icons ulrs
    const rainIconUrl =
        "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/rain.svg";
    const snowIconUrl =
        "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/snow.svg";
    const thunderstormsDayRainIconUrl =
        "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/thunderstorms-day-rain.svg";
    const thunderstormsNightRainIconUrl =
        "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/thunderstorms-night-rain.svg";
    const partlyCloudyDayDrizzleIconUrl =
        "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-day-drizzle.svg";
    const partlyCloudyNightDrizzleIconUrl =
        "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-night-drizzle.svg";

    res.status(200).json({
        t01d: thunderstormsDayRainIconUrl,
        t01n: thunderstormsNightRainIconUrl,
        t02d: thunderstormsDayRainIconUrl,
        t02n: thunderstormsNightRainIconUrl,
        t03d: thunderstormsDayRainIconUrl,
        t03n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/thunderstorms-night-rain.svg",
        t04d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/thunderstorms-rain.svg",
        t04n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/thunderstorms-night.svg",
        t05d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/thunderstorms-rain.svg",
        t05n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/thunderstorms-night.svg",
        d01d: partlyCloudyDayDrizzleIconUrl,
        d01n: partlyCloudyNightDrizzleIconUrl,
        d02d: partlyCloudyDayDrizzleIconUrl,
        d02n: partlyCloudyNightDrizzleIconUrl,
        d03d: partlyCloudyDayDrizzleIconUrl,
        d03n: partlyCloudyNightDrizzleIconUrl,
        r01d: rainIconUrl,
        r01n: rainIconUrl,
        r02d: rainIconUrl,
        r02n: rainIconUrl,
        r03d: rainIconUrl,
        r03n: rainIconUrl,
        f01d: rainIconUrl,
        f01n: rainIconUrl,
        r04d: rainIconUrl,
        r04n: rainIconUrl,
        r05d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-day-rain.svg",
        r05n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-night-rain.svg",
        r06d: rainIconUrl,
        r06b: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-night-rain.svg",
        s01d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-day-snow.svg",
        s01n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-night-snow.svg",
        s02d: snowIconUrl,
        s02n: snowIconUrl,
        s03d: snowIconUrl,
        s03n: snowIconUrl,
        s04d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-day-sleet.svg",
        s04n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-night-sleet.svg",
        s05d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/sleet.svg",
        s05n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/sleet.svg",
        s06d: rainIconUrl,
        s06n: rainIconUrl,
        a01d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-day-fog.svg",
        a01n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-night-fog.svg",
        a02d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-day-smoke.svg",
        a02n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/partly-cloudy-night-smoke.svg",
        a03d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/haze-day.svg",
        a03n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/haze-night.svg",
        a04d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/dust-day.svg",
        a04n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/dust-night.svg",
        a05d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/fog.svg",
        a05n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/fog.svg",
        a06d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/fog.svg",
        a06n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/fog.svg",
        c01d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/clear-day.svg",
        c01n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/clear-night.svg",
        c02d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/overcast-day.svg",
        c02n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/overcast-night.svg",
        c03d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/cloudy.svg",
        c03n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/cloudy.svg",
        c04d: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/overcast.svg",
        c04n: "https://raw.githubusercontent.com/basmilius/weather-icons/dev/production/fill/svg/overcast.svg",
        u00d: rainIconUrl,
        u00n: rainIconUrl
    });
}
