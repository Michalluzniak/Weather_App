import { apiCall } from "./apiCallHandler";

export const getCitiesList = async (): Promise<any> => {
    //
    return apiCall(
        "GET",
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
    );
};
