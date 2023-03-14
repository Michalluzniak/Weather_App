import { getLocalStorage } from "@/services/getLocalStorage";
import { setLocalStorage } from "@/services/setLocalStorage";

import useCityLocalTime from "./hooks/useCityLocalTime";

const DateAndHourBox = ({ data }: any) => {
    // if (data.features.length >= 1) {
    //     setLocalStorage(
    //         "cityTimeOffset",
    //         data.features[0].properties.timezone.offset_STD_seconds
    //     );
    //     setLocalStorage(
    //         "cityTimeZoneName",
    //         data.features[0].properties.timezone.name
    //     );
    // }

    const [localCityTime, localCityDate, setLocalDate] = useCityLocalTime();
    console.log(data.features[0].properties.timezone.offset_STD);
    setLocalDate(
        data.features[0].properties.timezone.offset_STD_seconds,
        data.features[0].properties.timezone.name,
        "en-US"
    );

    return (
        <div className="w-1/4">
            <p className="text-6xl">{localCityTime}</p>
            <p className="text-xl pl-2 pt-1">{localCityDate}</p>
        </div>
    );
};

export default DateAndHourBox;
