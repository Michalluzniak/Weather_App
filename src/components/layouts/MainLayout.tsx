import Searchbar from "../Searchbar";
import WeatherTemperatureBar from "../WeatherTemperatureBar";

export const MainLayout = ({ data }: any) => {
    return (
        <main
            className="flex flex-col justify-between items-center h-screen w-full bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)"
            }}
        >
            <div className="h-1/4 w-full bg-red-300 mt-20">
                <Searchbar></Searchbar>
            </div>
            <WeatherTemperatureBar data={data} className={"h-1/3 w-full"} />
        </main>
    );
};
