import { apiCall } from "../apiCallHandler";

const reverseGeocoding = (apiKey: string, lat: string, lon: string) => {
    return apiCall("GET", "https://api.geoapify.com/v1/geocode/reverse", {
        params: {
            apiKey,
            lat,
            lon
        }
    });
};

export default reverseGeocoding;
