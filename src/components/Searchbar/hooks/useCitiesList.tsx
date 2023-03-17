import { apiCall } from "@/api/apiCallHandler";
import { citiesListFilter } from "@/services/citiesListFilter";
import { useState } from "react";

export const useCitiesList = () => {
    //
    const [citiesList, setCitiesList] = useState<any>();
    const [cursorIndexOnTheList, setCursorIndexOnTheList] =
        useState<number>(-1);

    const MAX_LIST_LENGTH = 7;

    const setIndexOnTheListByMouse = (index: number) => {
        setCursorIndexOnTheList(index);
    };

    const setFilterValue = async (inputValue: string) => {
        const response: any = await apiCall(
            "GET",
            "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
        );

        const filteredList = citiesListFilter(inputValue, response);

        setCitiesList(
            filteredList.length >= MAX_LIST_LENGTH
                ? filteredList.slice(0, MAX_LIST_LENGTH)
                : filteredList.slice(0, filteredList.length)
        );
    };

    const setIndexOnTheList = (event: any, submit: any) => {
        event.keyCode === (38 || 40) && event.preventDefault();

        event.keyCode === 38 &&
            cursorIndexOnTheList > 0 &&
            setCursorIndexOnTheList((prevState: number) => (prevState -= 1));

        event.keyCode === 40 &&
            cursorIndexOnTheList < citiesList.length - 1 &&
            cursorIndexOnTheList < MAX_LIST_LENGTH &&
            setCursorIndexOnTheList((prevState: number) => (prevState += 1));

        event.keyCode === 13 &&
            cursorIndexOnTheList !== -1 &&
            (event.preventDefault(),
            submit(citiesList[cursorIndexOnTheList].name));

        event.keyCode === 8 && setCursorIndexOnTheList(-1);
    };

    return [
        citiesList,
        setFilterValue,
        cursorIndexOnTheList,
        setIndexOnTheList,
        setIndexOnTheListByMouse
    ];
};
