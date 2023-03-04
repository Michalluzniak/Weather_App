import WeatherTemperatureBar from "../WeatherTemperatureBar";

export const MainLayout = ({ data }: any) => {
    return (
        <main className="flex flex-col justify-between items-center h-screen w-full">
            <div className="h-1/4 w-full bg-red-300 mt-20"></div>
            <WeatherTemperatureBar
                data={data}
                className={"h-1/3 w-full bg-yellow-300"}
            />
        </main>
    );
};
