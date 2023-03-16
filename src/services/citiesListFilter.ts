interface CitiesList {
    name: string;
    country: string;
}

export const citiesListFilter = (wordToMatch: string, list: [any]) => {
    return list.filter((place) => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.name.match(regex) || place.country.match(regex);
    });
};
