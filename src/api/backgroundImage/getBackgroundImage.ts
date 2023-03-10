import { apiCall } from "../apiCallHandler";

const getBackgroundImage = (apiKey: string, cityName: string) => {
    return apiCall("GET", "https://api.unsplash.com/search/photos", {
        params: {
            query: cityName
        },
        headers: {
            Authorization: `Client-ID ${apiKey}`
        }
    });
};

export default getBackgroundImage;
