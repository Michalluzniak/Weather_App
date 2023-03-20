import Image from "next/image";
import { useState } from "react";
import CityNameBox from "../CityNameBox";
import DateAndHourBox from "../DateAndHourBox";
import { BackgroundError } from "../Errors/BackgroundError";
import Loading from "../Loading";
import Searchbar from "../Searchbar";
import WeatherTemperatureBar from "../WeatherTemperatureBar";

export const MainLayout = ({ data }: any) => {
    const [isBgImageLoading, setIsBgImageLoading] = useState<boolean>(true);

    const imageLoadingStateHandler = () => {
        setIsBgImageLoading(true);
    };

    const backgroundImageErrorCheck = data.backgroundImage.results.length <= 0;

    const backgroundImage = backgroundImageErrorCheck
        ? "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        : data.backgroundImage.results[0].urls.full;

    return (
        <main className="flex flex-col  justify-between items-center h-screen w-full bg-cover bg-no-repeat bg-center text-white">
            {isBgImageLoading && <Loading />}

            <Image
                loader={() => backgroundImage}
                src={backgroundImage}
                alt="picture of the selected city"
                fill
                unoptimized={true}
                className="z-0 object-cover"
                onLoad={() => {
                    setIsBgImageLoading(false);
                }}
            />

            {backgroundImageErrorCheck && <BackgroundError />}

            <div className="flex justify-between h-1/4 w-full mt-20 px-10">
                <DateAndHourBox data={data.timezone} />

                <Searchbar
                    imageLoadingStateHandler={imageLoadingStateHandler}
                />

                <CityNameBox data={data.timezone} />
            </div>

            <WeatherTemperatureBar data={data} className={"h-1/3 w-full"} />
        </main>
    );
};
