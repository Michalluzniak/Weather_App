const CityNameBox = ({ data }: any) => {
    console.log(data);
    return (
        <div className="text-right w-1/5">
            <h1 className="text-3xl">TODAY’S WEATHER IN</h1>
            <h3 className="text-4xl">United States</h3>
            <h2 className="text-3xl">New York</h2>
        </div>
    );
};

export default CityNameBox;
