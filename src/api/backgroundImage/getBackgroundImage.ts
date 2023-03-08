import { apiCall } from "../apiCallHandler";

const getBackgroundImage = (cityName: string) => {
    return apiCall("GET", "https://api.unsplash.com/search/photos", {
        params: {
            query: cityName
        },
        headers: {
            Authorization: `Client-ID ${process.env.UNSLPASH_IMAGES_API_KEY}`
        }
    });
};

export default getBackgroundImage;
