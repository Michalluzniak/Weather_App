import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
    return (
        <div className="flex justify-around w-1/3">
            <input
                type="text"
                className="bg-black/70 rounded-full w-10/12 h-10 outline-none px-4 placeholder:text-slate-300"
                placeholder="Search for city"
            />
            <button className="bg-black/70 h-10 w-10 rounded-full grid place-items-center ">
                <AiOutlineSearch className="text-slate-200" />
            </button>
        </div>
    );
};

export default Searchbar;
