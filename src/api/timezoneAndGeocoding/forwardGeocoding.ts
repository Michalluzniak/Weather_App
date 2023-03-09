import { apiCall } from "../apiCallHandler";

const forwardGeocoding = (apiKey: string, cityName: string) => {
    return apiCall("GET", "https://api.geoapify.com/v1/geocode/search", {
        params: {
            apiKey,
            city: cityName
        }
    });
};

export default forwardGeocoding;
