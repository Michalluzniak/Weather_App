import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { OtherDayForecast } from "./forecastDays/OtherDayForecast";
import { TodayForecast } from "./forecastDays/TodayForecast";

const WeatherTemperatureBar = ({ data, className }: any) => {
    return (
        <div className={`flex flex-row ${className}`}>
            <TodayForecast data={data}></TodayForecast>
            {data.data.data.map((weatherData: any, index: number) => {
                return (
                    index !== 0 && (
                        <OtherDayForecast
                            key={index}
                            data={weatherData}
                            weatherIcons={data.weatherIcons}
                        />
                    )
                );
            })}
        </div>
    );
};

export default WeatherTemperatureBar;
