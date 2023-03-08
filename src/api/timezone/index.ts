import { apiCall } from "../apiCallHandler";

const getTimezone = (lat: string, lon: string) => {
    return apiCall("GET", "http://api.timezonedb.com/v2.1/get-time-zone", {
        params: {
            key: "O3N19C1A36UB",
            format: "json",
            by: "position",
            lng: lon,
            lat: lat
        }
    });
};

export default getTimezone;
