import { useEffect, useState } from "react";

type CityTimeLocale = "en-US" | "en-GB";

const useCityLocalTime = () => {
    const [localCityTime, setlocalCityTime] = useState<any>();

    const setLocalTime = (timeZone: string, timeLocale: CityTimeLocale) => {
        //
        const updateLocalTime = () => {
<<<<<<< Updated upstream
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
=======
            let targetTime = new Date();
            const clientLocationOffset = new Date().getTimezoneOffset();
            let cityOffsetTime = new Date(
                targetTime.getTime() +
                    timeZone * 1000 +
                    clientLocationOffset * 60 * 1000
            );

            // console.log(offsetTime);
            // // Get hours and minutes in variables
            // const hours = offsetTime.split(":")[0];
            // const minutes = offsetTime.split(":")[1];
            // //Check time format and add am/pm if necessary
            setlocalCityTime(cityOffsetTime.toLocaleTimeString(timeLocale));
            // timeLocale === "en-US"
            //     ? setlocalCityTime(
            //           `${hours}:${minutes} ${offsetTime.slice(
            //               offsetTime.length - 2
            //           )}`
            //       )
            //     : setlocalCityTime(`${hours}:${minutes}`);
>>>>>>> Stashed changes
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
