const CityNameBox = ({ data }: any) => {
    //
    const city = data.features[0].properties.city;
    const country = data.features[0].properties.country;

    return (
        <div className="text-right w-1/4 uppercase">
            <h1 className="text-3xl">Today's weather in</h1>

            <h3 className="text-4xl">{city}</h3>
            <h2 className="text-3xl">{country}</h2>
        </div>
    );
};

export default CityNameBox;
