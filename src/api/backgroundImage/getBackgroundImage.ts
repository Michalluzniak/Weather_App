import { apiCall } from "../apiCallHandler";

const getBackgroundImage = (apiKey: string, cityName: string) => {
    return apiCall("GET", "https://api.unsplash.com/search/photos", {
        params: {
            query: cityName,
            page: 1,
            per_page: 1
        },
        headers: {
            Authorization: `Client-ID ${apiKey}`
        }
    });
};

export default getBackgroundImage;
