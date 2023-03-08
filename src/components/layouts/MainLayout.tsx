import CityNameBox from "../CityNameBox";
import DateAndHourBox from "../DateAndHourBox";
import Searchbar from "../Searchbar";
import WeatherTemperatureBar from "../WeatherTemperatureBar";

export const MainLayout = ({ data }: any) => {
    return (
        <main
            className="flex flex-col justify-between items-center h-screen w-full bg-cover bg-no-repeat bg-center text-slate-200"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)"
            }}
        >
            <div className="flex justify-between h-1/4 w-full mt-20 px-10">
                <DateAndHourBox />
                <Searchbar />
                <CityNameBox data={data} />
            </div>
            <WeatherTemperatureBar data={data} className={"h-1/3 w-full"} />
        </main>
    );
};
