import { getLocalStorage } from "@/services/getLocalStorage";
import { setLocalStorage } from "@/services/setLocalStorage";
import { useEffect, useState } from "react";

const CityNameBox = ({ data }: any) => {
    //
    // const [city, setCity] = useState<any>();
    // const [country, setCountry] = useState<any>();

    // useEffect(() => {
    //     if (data.features.length >= 1) {
    //         setLocalStorage("city", data.features[0].properties.city);
    //         setLocalStorage("country", data.features[0].properties.country);

    //         setCountry(getLocalStorage("country"));
    //         setCity(getLocalStorage("city"));
    //     }
    // }, []);
    const city = data.features[0].properties.city;
    const country = data.features[0].properties.country;

    return (
        <div className="text-right w-1/4 uppercase">
            <h1 className="text-3xl">Today's weather in</h1>

            <h3 className="text-4xl">{city}</h3>
            <h2 className="text-3xl">{country}</h2>
        </div>
    );
};

export default CityNameBox;
