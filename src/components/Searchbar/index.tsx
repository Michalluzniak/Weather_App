import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
    return (
        <div className="flex justify-around w-1/5">
            <input
                type="text"
                className="bg-black/70 rounded-full w-10/12 h-7"
            />
            <button className="bg-black/70 h-7 w-7 rounded-full grid place-items-center ">
                <AiOutlineSearch className="text-slate-200" />
            </button>
        </div>
    );
};

export default Searchbar;
