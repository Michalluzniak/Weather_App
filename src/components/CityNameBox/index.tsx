const CityNameBox = ({ data }: any) => {
    console.log(data.features[0].properties);
    const countryName = data.features[0].properties.country;
    const cityName = data.features[0].properties.city;

    return (
        <div className="text-right w-1/5 uppercase">
            <h1 className="text-3xl">Today's weather in</h1>
            <h3 className="text-4xl">{countryName}</h3>
            <h2 className="text-3xl">{cityName}</h2>
        </div>
    );
};

export default CityNameBox;
