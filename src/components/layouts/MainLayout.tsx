import CityNameBox from "../CityNameBox";
import DateAndHourBox from "../DateAndHourBox";
import Searchbar from "../Searchbar";
import WeatherTemperatureBar from "../WeatherTemperatureBar";

export const MainLayout = ({ data }: any) => {
    return (
        <main
            className="flex flex-col justify-between items-center h-screen w-full bg-cover bg-no-repeat bg-center text-white"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(${data.backgroundImage.results[3].urls.full})`,
                filter: "brightness(90%)"
            }}
        >
            <div className="flex justify-between h-1/4 w-full mt-20 px-10">
                <DateAndHourBox data={data.timezone} />
                <Searchbar />
                <CityNameBox data={data.timezone} />
            </div>
            <WeatherTemperatureBar data={data} className={"h-1/3 w-full"} />
        </main>
    );
};
