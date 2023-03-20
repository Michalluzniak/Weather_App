import { displaySearchMatches } from "./displayCitiesFilterResult";

const SearchList = ({
    inputValue,
    citiesList,
    submitResultFromTheList,
    cursorIndexOnTheList,
    setIndexOnTheListByMouse
}: any) => {
    return (
        <div
            className={`flex justify-center w-full mt-4 ${
                inputValue === "" && "hidden"
            } `}
        >
            <ul className="w-10/12  text-lg rounded-2xl bg-black/70">
                {displaySearchMatches(
                    inputValue,
                    citiesList,
                    submitResultFromTheList,
                    cursorIndexOnTheList,
                    setIndexOnTheListByMouse
                )}
            </ul>
        </div>
    );
};

export default SearchList;
