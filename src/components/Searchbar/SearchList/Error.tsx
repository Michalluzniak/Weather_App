import React from "react";

export const Error = () => {
    return (
        <div className="flex items-center justify-center bg-red-500/90 h-28 w-full  rounded-2xl">
            {`The specified city does not exist in our database`}
        </div>
    );
};
