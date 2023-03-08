import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";

const Searchbar = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const router = useRouter();

    const inputOnChangeHanlder = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setInputValue(event.target.value);
    };

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`?city=${inputValue}`);
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmitHandler} className="flex justify-around w-1/3">
            <input
                type="text"
                className="bg-black/70 rounded-full w-10/12 h-10 outline-none px-4 placeholder:text-slate-300"
                placeholder="Search for city"
                value={inputValue}
                onChange={inputOnChangeHanlder}
            />
            <button className="bg-black/70 h-10 w-10 rounded-full grid place-items-center ">
                <BiSearch className="text-slate-200 text-xl" />
            </button>
        </form>
    );
};

export default Searchbar;
