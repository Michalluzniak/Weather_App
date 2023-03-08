import { useEffect, useState } from "react";

type CityTimeLocale = "en-US" | "en-GB";

const useCityLocalTime = () => {
    const [localCityTime, setlocalCityTime] = useState<any>();

    const setLocalTime = (timeZone: string, timeLocale: CityTimeLocale) => {
        //
        const updateLocalTime = () => {
            let time = new Date().toLocaleTimeString(timeLocale, {
                timeZone
            });

            // Get hours and minutes in variables
            const hours = time.split(":")[0];
            const minutes = time.split(":")[1];

            //Check time format and add am/pm if necessary
            timeLocale === "en-US"
                ? setlocalCityTime(
                      `${hours}:${minutes} ${time.slice(time.length - 2)}`
                  )
                : setlocalCityTime(`${hours}:${minutes}`);
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
