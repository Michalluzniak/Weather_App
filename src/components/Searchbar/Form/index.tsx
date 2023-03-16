import { BiSearch } from "react-icons/bi";

const Form = ({
    onSubmitHandler,
    inputValue,
    inputOnChangeHanlder,
    setIndexOnTheList,
    submitResultFromTheList
}: any) => {
    return (
        <form
            onSubmit={onSubmitHandler}
            className="w-full flex justify-around "
        >
            <input
                type="text"
                className="bg-black/70 rounded-full w-10/12 h-10 outline-none px-4 placeholder:text-slate-300"
                placeholder="Search for city"
                value={inputValue}
                onChange={inputOnChangeHanlder}
                onKeyDown={(event) =>
                    setIndexOnTheList(event, submitResultFromTheList)
                }
            />

            <button className="bg-black/70 h-10 w-10 rounded-full grid place-items-center ">
                <BiSearch className="text-slate-200 text-xl" />
            </button>
        </form>
    );
};

export default Form;
