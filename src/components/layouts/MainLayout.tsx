import CityNameBox from "../CityNameBox";
import DateAndHourBox from "../DateAndHourBox";
import { BackgroundError } from "../Errors/BackgroundError";
import Searchbar from "../Searchbar";
import WeatherTemperatureBar from "../WeatherTemperatureBar";

export const MainLayout = ({ data }: any) => {
    const backgroundImageErrorCheck = data.backgroundImage.results.length <= 0;

    const backgroundImage = backgroundImageErrorCheck
        ? "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        : data.backgroundImage.results[0].urls.full;

    return (
        <main
            className="flex flex-col justify-between items-center h-screen w-full bg-cover bg-no-repeat bg-center text-white"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(${backgroundImage})`,
                filter: "brightness(90%)"
            }}
        >
            {backgroundImageErrorCheck && <BackgroundError />}

            <div className="flex justify-between h-1/4 w-full mt-20 px-10">
                <DateAndHourBox data={data.timezone} />

                <Searchbar />

                <CityNameBox data={data.timezone} />
            </div>
            <WeatherTemperatureBar data={data} className={"h-1/3 w-full"} />
        </main>
    );
};
