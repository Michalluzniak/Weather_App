import { displaySearchMatches } from "./displayCitiesFilterResult";

const SearchList = ({
    inputValue,
    citiesList,
    submitResult,
    cursorIndexOnTheList
}: any) => {
    return (
        <div className="citiesList w-10/12 ml-2 min-h-96 mt-4 bg-black rounded-2xl bg-black/70">
            {inputValue !== "" && (
                <ul className="w-full p-3 text-lg">
                    {displaySearchMatches(
                        inputValue,
                        citiesList,
                        submitResult,
                        cursorIndexOnTheList
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchList;
