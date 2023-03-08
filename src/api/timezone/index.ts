import { apiCall } from "../apiCallHandler";

const getTimezone = (apiKey: string, cityName: string) => {
    return apiCall("GET", "https://api.geoapify.com/v1/geocode/search", {
        params: {
            apiKey: "d4559eb66d884dfaa33c9171c5c290af",
            city: cityName
        }
    });
};

export default getTimezone;
