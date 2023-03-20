import { getDayName } from "@/utils/date/getDayNameFromDate";
import { temperatureConverter } from "@/utils/temperatureConverter";
import Image from "next/image";
import React, { useEffect } from "react";

export const OtherDayForecast = ({ data, weatherIcons }: any) => {
    const unit = "";
    const temperature = temperatureConverter(data.temp, "Celsius");

    const dayName = getDayName(data.datetime, "en-US");

    return (
        <div
            className="flex flex-col justify-between items-center border-l border-white/30 h-fuitell"
            style={{
                width: "calc(75% / 6)"
            }}
        >
            <p className="py-3 text-slate-200 text-xl">{dayName}</p>
            <Image
                src={weatherIcons[data.weather.icon]}
                height={148}
                width={148}
                alt="Follow us on Twitter"
                priority={true}
            />
            <p className="py-3">{data.weather.description}</p>
            <i className="wi wi-day-light-wind"></i>
            <p className="py-3 text-2xl">{data.temp} °C</p>
        </div>
    );
};
