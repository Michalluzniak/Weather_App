import { useEffect, useState } from "react";

type CityTimeLocale = "en-US" | "en-GB";

const useCityLocalTime = () => {
    const [localCityTime, setlocalCityTime] = useState<any>();

    const setLocalTime = (timeZone: number, timeLocale: CityTimeLocale) => {
        //
        const updateLocalTime = () => {
            let targetTime = new Date();
            const clientLocationOffset = new Date().getTimezoneOffset();
            let cityOffsetTime = new Date(
                targetTime.getTime() +
                    timeZone * 1000 +
                    clientLocationOffset * 60 * 1000
            ).toLocaleTimeString(timeLocale);

            // Get hours and minutes in variables
            const hours = cityOffsetTime.split(":")[0];
            const minutes = cityOffsetTime.split(":")[1];
            //Check time format and add am/pm if necessary

            timeLocale === "en-US"
                ? setlocalCityTime(
                      `${hours}:${minutes} ${cityOffsetTime.slice(
                          cityOffsetTime.length - 2
                      )}`
                  )
                : setlocalCityTime(`${hours}:${minutes}`);
        };

        var date = new Date();
        var now_utc = Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds()
        );

        // console.log(new Date(now_utc));

        useEffect(() => {
            updateLocalTime();
            const interval = setInterval(updateLocalTime, 1000);

            return () => clearInterval(interval);
        }, [localCityTime]);
    };

    return [localCityTime, setLocalTime];
};

export default useCityLocalTime;
