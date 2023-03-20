import reactStringReplace from "react-string-replace";
import { useState } from "react";
import { Error } from "./Error";

export const displaySearchMatches = (
    inputValue: string,
    citiesList: any,
    submitResultFromTheList: any,
    cursor: any,
    setIndexOnTheListByMouse: any
) => {
    //
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const setCursorIndexOnHover = (index: number) => {
        setIndexOnTheListByMouse(index);
    };

    if (citiesList)
        return citiesList.length === 0 ? (
            <Error />
        ) : (
            citiesList.map((place: any, index: any) => {
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
                                index === citiesList.length ||
                                (index !== maxListLength &&
                                    "border-b border-white/40")
                            } p-3 cursor-pointer ${
                                index === 0 && "rounded-t-2xl"
                            }
                        ${index === citiesList.length - 1 && "rounded-b-2xl"}
                        hover:bg-white hover:text-black ${
                            cursor === index &&
                            !isHovered &&
                            "bg-white text-black"
                        }`}
                            onClick={(event: any) => {
                                citiesList.length !== 0 &&
                                    submitResultFromTheList(
                                        event.target.innerText
                                    );
                            }}
                            onMouseEnter={() => {
                                setCursorIndexOnHover(index);
                                setIsHovered((prev) => !prev);
                            }}
                            onMouseLeave={() => setIsHovered((prev) => !prev)}
                        >
                            <span>
                                {cityName}, {countryName}
                            </span>
                        </li>
                    )
                );
            })
        );
};
