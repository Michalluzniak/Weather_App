import CityNameBox from "../CityNameBox";
import DateAndHourBox from "../DateAndHourBox";
import Searchbar from "../Searchbar";
import WeatherTemperatureBar from "../WeatherTemperatureBar";

export const MainLayout = ({ data }: any) => {
    return (
        <main
            className="flex flex-col justify-between items-center h-screen w-full bg-cover bg-no-repeat bg-center text-slate-200"
            style={{
                backgroundImage: `url(${data.backgroundImage.results[0].urls.full})`
            }}
        >
            <div className="flex justify-between h-1/4 w-full mt-20 px-10">
                <DateAndHourBox data={data.timezone} />
                <Searchbar />
                <CityNameBox />
            </div>
            <WeatherTemperatureBar data={data} className={"h-1/3 w-full"} />
        </main>
    );
};
