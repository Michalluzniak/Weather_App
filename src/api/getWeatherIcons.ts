import axios from "axios";

export const getWeatherIcons = () => {
    const data = axios.get("http://localhost:3000/api/weatherIcons");

    return data;
};
