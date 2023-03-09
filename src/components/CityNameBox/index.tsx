<<<<<<< Updated upstream
const CityNameBox = () => {
=======
const CityNameBox = ({ data }: any) => {
    const countryName = data.features[0].properties.country;
    const cityName = data.features[0].properties.city;

>>>>>>> Stashed changes
    return (
        <div className="text-right w-1/5">
            <h1 className="text-3xl">TODAY’S WEATHER IN</h1>
            <h3 className="text-4xl">United States</h3>
            <h2 className="text-3xl">New York</h2>
        </div>
    );
};

export default CityNameBox;
