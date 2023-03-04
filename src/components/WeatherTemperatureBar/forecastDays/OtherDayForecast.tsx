import { getDayName } from "@/utils/date/getDayNameFromDate";
import { temperatureConverter } from "@/utils/temperatureConverter";
import Image from "next/image";
import React, { useEffect } from "react";

export const OtherDayForecast = ({ data, weatherIcons }: any) => {
    const unit = "";
    const temperature = temperatureConverter(data.temp, "Celsius");

    const dayName = getDayName(data.datetime, "en-US");
    const icons = weatherIcons;
    // console.log(icons[data.weather.icon]);

    return (
        <div className="flex flex-col justify-between items-center border-r border-slate-200 h-full bg-red-800 grow">
            <p className="py-3 text-slate-200">{`lal`}</p>
            <Image
                priority
                // src={`svg/${data.weather.icon}.svg`}
                src={icons[data.weather.icon]}
                height={128}
                width={128}
                alt="Follow us on Twitter"
            />
            <i className="wi wi-day-light-wind"></i>
            <p className="py-3 text-xl text-slate-200">{data.temp} °C</p>
        </div>
    );
};
