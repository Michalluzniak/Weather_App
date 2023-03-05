import React from "react";
import { OtherDayForecast } from "./forecastDays/OtherDayForecast";
import { TodayForecast } from "./forecastDays/TodayForecast";

const WeatherTemperatureBar = ({ data, className }: any) => (
    <div
        className={`flex flex-row uppercase bg-black/70 backdrop-blur-sm	 ${className}`}
    >
        {data.data.data.map((weatherData: any, index: number) => {
            return index === 0 ? (
                <TodayForecast
                    key={index}
                    data={weatherData}
                    weatherIcons={data.weatherIcons}
                ></TodayForecast>
            ) : (
                <OtherDayForecast
                    key={index}
                    data={weatherData}
                    weatherIcons={data.weatherIcons}
                />
            );
        })}
    </div>
);

export default WeatherTemperatureBar;
