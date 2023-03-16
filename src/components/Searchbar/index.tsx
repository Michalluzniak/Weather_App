import { useState } from "react";
import { useRouter } from "next/router";
import SearchList from "./SearchList";
import Form from "./Form";
import { useCitiesList } from "./hooks/useCitiesList";

const Searchbar = () => {
    const router = useRouter();

    const [inputValue, setInputValue] = useState<string>("");

    const [
        citiesList,
        setFilterValue,
        cursorIndexOnTheList,
        setIndexOnTheList
    ] = useCitiesList();

    setFilterValue(inputValue);

    // const matchArray = citiesListFilter(inputValue, data);

    const inputOnChangeHanlder = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setInputValue(event.target.value);
    };

    const submitResultFromTheList = (elementValue: string) => {
        router.push(`?city=${elementValue.split(",")[0]}`);
        setInputValue("");
    };

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`?city=${inputValue}`);
        setInputValue("");
    };

    return (
        <div className="w-1/3">
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
            />
        </div>
    );
};

export default Searchbar;
