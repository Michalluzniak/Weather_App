import { useEffect, useState } from "react";
import useCityLocalTime from "./hooks/useCityLocalTime";

const DateAndHourBox = ({ data }: any) => {
    console.log(data.features[0].properties.timezone);
    const cityTimeOffset =
        data.features[0].properties.timezone.offset_STD_seconds;

    const [localCityTime, setLocalTime] = useCityLocalTime();

    setLocalTime(cityTimeOffset, "en-GB");

    return (
        <div className="w-1/5">
            <p className="text-6xl">{localCityTime}</p>
            <p>Monday, 5 July 2021</p>
        </div>
    );
};

export default DateAndHourBox;
