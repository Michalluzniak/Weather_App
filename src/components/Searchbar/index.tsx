import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchList from "./SearchList";
import Form from "./Form";
import { useCitiesList } from "./hooks/useCitiesList";

const Searchbar = ({ imageLoadingStateHandler }: any) => {
    const router = useRouter();

    const [inputValue, setInputValue] = useState<string>("");

    const [
        citiesList,
        setFilterValue,
        cursorIndexOnTheList,
        setIndexOnTheList,
        setIndexOnTheListByMouse
    ] = useCitiesList();

    useEffect(() => {
        setFilterValue(inputValue);
    }, [inputValue]);

    const inputOnChangeHanlder = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setInputValue(event.target.value);
    };

    const submitResultFromTheList = (elementValue: string) => {
        if (citiesList.length !== 0) {
            imageLoadingStateHandler();
            router.push(`?city=${elementValue.split(",")[0]}`);
            setInputValue("");
        }
    };

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (citiesList.length !== 0) {
            imageLoadingStateHandler();
            router.push(`?city=${inputValue}`);
            setInputValue("");
        }
    };

    return (
        <div className="w-1/3 z-10">
            <Form
                onSubmitHandler={onSubmitHandler}
                inputValue={inputValue}
                inputOnChangeHanlder={inputOnChangeHanlder}
                setIndexOnTheList={setIndexOnTheList}
                submitResultFromTheList={submitResultFromTheList}
            />
            <SearchList
                inputValue={inputValue}
                citiesList={citiesList}
                submitResultFromTheList={submitResultFromTheList}
                cursorIndexOnTheList={cursorIndexOnTheList}
                setIndexOnTheListByMouse={setIndexOnTheListByMouse}
            />
        </div>
    );
};

export default Searchbar;
