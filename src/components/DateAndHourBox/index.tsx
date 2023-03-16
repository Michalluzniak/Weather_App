import useCityLocalTime from "./hooks/useCityLocalTime";

const DateAndHourBox = ({ data }: any) => {
    const [localCityTime, localCityDate, setLocalDate] = useCityLocalTime();

    setLocalDate(
        data.features[0].properties.timezone.offset_DST_seconds,
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
