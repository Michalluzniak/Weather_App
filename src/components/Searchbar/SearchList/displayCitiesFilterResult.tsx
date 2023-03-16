import { citiesListFilter } from "../../../services/citiesListFilter";
import reactStringReplace from "react-string-replace";
import { useState } from "react";

export const displaySearchMatches = (
    inputValue: string,
    matchArray: any,
    submitValue: any,
    cursor: any
) => {
    //
    // const [isHovered, setIsHovered] = useState<boolean>(false);

    return matchArray.map((place: any, index: any) => {
        //
        const cityName = reactStringReplace(
            place.name,
            inputValue,
            (match: string, i: any) => {
                return (
                    <span key={i} className="bg-orange-400">
                        {match}
                    </span>
                );
            }
        );

        const countryName = reactStringReplace(
            place.country,
            inputValue,
            (match: string, i: any) => {
                return (
                    <span key={i} className="bg-orange-400">
                        {match}
                    </span>
                );
            }
        );

        const maxListLength = 7;

        return (
            index <= maxListLength && (
                <li
                    key={index}
                    className={`${
                        index + 1 === matchArray.length ||
                        (index !== maxListLength && "border-b border-white/40")
                    } py-3 cursor-pointer hover:bg-white hover:text-black ${
                        cursor === index && "bg-white text-black"
                    }`}
                    onClick={(event: any) => {
                        event.stopPropagation();
                        submitValue(event.target.innerText);
                    }}
                    // onMouseEnter={() => setIsHovered((prev) => !prev)}
                    // onMouseLeave={() => setIsHovered((prev) => !prev)}
                >
                    <span>
                        {cityName}, {countryName}
                    </span>
                </li>
            )
        );
    });
};
