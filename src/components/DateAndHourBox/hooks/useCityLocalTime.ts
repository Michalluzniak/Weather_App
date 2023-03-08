import { off } from "process";
import { useEffect, useState } from "react";

type CityTimeLocale = "en-US" | "en-GB";

const useCityLocalTime = () => {
    const [localCityTime, setlocalCityTime] = useState<any>();

    const setLocalTime = (timeZone: number, timeLocale: CityTimeLocale) => {
        //
        const updateLocalTime = () => {
            let targetTime = new Date();

            let offsetTime = new Date(
                targetTime.getTime() + timeZone * 1000
            ).toLocaleTimeString(timeLocale);

            // // Get hours and minutes in variables
            const hours = offsetTime.split(":")[0];

            const minutes = offsetTime.split(":")[1];

            // //Check time format and add am/pm if necessary
            timeLocale === "en-US"
                ? setlocalCityTime(
                      `${hours}:${minutes} ${offsetTime.slice(
                          offsetTime.length - 2
                      )}`
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
