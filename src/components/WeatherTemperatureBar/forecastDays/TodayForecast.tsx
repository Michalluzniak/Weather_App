import Image from "next/image";

export const TodayForecast = ({ data, weatherIcons }: any) => {
    // console.log(data);
    return (
        <div className="grid grid-cols-2 grid-rows-3 justify-items-center items-center h-full w-1/4">
            <p className="col-span-2 py-3 text-2xl self-start">Today</p>

            <Image
                src={weatherIcons[data.weather.icon]}
                height={186}
                width={186}
                alt="Follow us on Twitter"
                className="row-start-2"
            />
            <p className="py-3 text-slate-200 row-start-3 pb-10">
                {data.weather.description}
            </p>
            <div className="pr-4 row-start-2 pt-5">
                <p className="py-3 text-5xl">{data.temp} °C</p>

                <p className="py-3">Humidity: {data.rh}%</p>
                <p className="py-3">Wind speed:</p>
                <p className="py-3">{data.wind_spd} km/h</p>
            </div>
        </div>
    );
};
