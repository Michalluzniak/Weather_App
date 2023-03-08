import { useState } from "react";

export const Input = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const inputOnChangeHanlder = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setInputValue(event.target.value);
    };

    return (
        <input
            type="text"
            className="bg-black/70 rounded-full w-10/12 h-10 outline-none px-4 placeholder:text-slate-300"
            placeholder="Search for city"
            value={inputValue}
            onChange={inputOnChangeHanlder}
        />
    );
};
