import { BiSearch } from "react-icons/bi";

const Form = ({
    onSubmitHandler,
    inputValue,
    inputOnChangeHanlder,
    setIndexOnTheList,
    submitResultFromTheList
}: any) => {
    return (
        <form onSubmit={onSubmitHandler} className="w-full flex justify-center">
            <input
                type="text"
                className="bg-black/70 rounded-full w-10/12 h-10 outline-none px-4 placeholder:text-slate-300 relative"
                placeholder="Search for city"
                value={inputValue}
                onChange={inputOnChangeHanlder}
                onKeyDown={(event) =>
                    setIndexOnTheList(event, submitResultFromTheList)
                }
            />

            <button className="bg-black/70 h-10 w-10 rounded-full grid place-items-center group absolute right-1/3">
                <BiSearch className="text-slate-200 text-xl group-hover:text-white" />
            </button>
        </form>
    );
};

export default Form;
