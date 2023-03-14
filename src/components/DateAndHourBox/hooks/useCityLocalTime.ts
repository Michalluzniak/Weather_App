import { off } from "process";
import { useEffect, useState } from "react";

type CityTimeLocale = "en-US" | "en-GB";

const useCityLocalTime = () => {
    const [localCityTime, setlocalCityTime] = useState<any>();
    const [localCityDate, setLocalCityDate] = useState<any>();

    const setLocalDate = (
        timeZoneOffset: number,
        timeZoneName: string,
        dateFormat: CityTimeLocale
    ) => {
        const clientDate = new Date().toLocaleDateString(dateFormat, {
            timeZone: timeZoneName
        });

        const monthName = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        const getCurrentMonth = (): number => {
            const monthString =
                dateFormat === "en-US"
                    ? clientDate.split("/")[0]
                    : clientDate.split("/")[1];

            return parseInt(
                monthString.charAt(0) === "0"
                    ? monthString.slice(1)
                    : monthString
            );
        };

        console.log(getCurrentMonth());

        useEffect(() => {
            setLocalCityDate(
                `${clientDate.split("/")[0]} ${
                    monthName[getCurrentMonth() - 1]
                } ${clientDate.split("/")[2]}`
            );
        }, [localCityDate]);

        //
        const updateLocalTime = () => {
            //
            const clientLocalDate = new Date();

            const clientLocationOffset = new Date().getTimezoneOffset();

            const cityOffsetTime = new Date(
                clientLocalDate.getTime() +
                    timeZoneOffset * 1000 +
                    clientLocationOffset * 60 * 1000
            ).toLocaleTimeString(dateFormat);

            // Get hours and minutes in variables
            const hours = cityOffsetTime.split(":")[0];
            const minutes = cityOffsetTime.split(":")[1];

            // Check time format and add am/pm if necessary
            dateFormat === "en-US"
                ? setlocalCityTime(
                      `${hours}:${minutes} ${cityOffsetTime.slice(
                          cityOffsetTime.length - 2
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

    return [localCityTime, localCityDate, setLocalDate];
};

export default useCityLocalTime;
