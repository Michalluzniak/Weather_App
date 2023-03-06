import { useEffect, useState } from "react";
import useCityLocalTime from "./hooks/useCityLocalTime";

const DateAndHourBox = ({ data }: any) => {
    const [localCityTime, setLocalTime] = useCityLocalTime();

    setLocalTime(data.zoneName, "en-US");

    return (
        <div className="">
            <p className="text-6xl">{localCityTime}</p>
            <p>Monday, 5 July 2021</p>
        </div>
    );
};

export default DateAndHourBox;
