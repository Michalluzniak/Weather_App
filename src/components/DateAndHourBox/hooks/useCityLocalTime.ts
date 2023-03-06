import { useEffect, useState } from "react";

type CityTimeLocale = "en-US" | "en-GB";

const useCityLocalTime = () => {
    const [localCityTime, setlocalCityTime] = useState<any>();

    const setLocalTime = (timeZone: string, timeLocale: CityTimeLocale) => {
        const updateLocalTime = () => {
            let time = new Date().toLocaleTimeString(timeLocale, {
                timeZone
            });
            setlocalCityTime(time);
        };

        useEffect(() => {
            updateLocalTime();
            const interval = setInterval(updateLocalTime, 1000);

            return () => clearInterval(interval);
        }, [localCityTime]);
    };
    return [localCityTime, setLocalTime];
};

export default useCityLocalTime;
