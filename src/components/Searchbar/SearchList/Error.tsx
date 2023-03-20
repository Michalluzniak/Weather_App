import React from "react";

export const Error = () => {
    return (
        <div className="flex text-center items-center bg-red-500/90 h-28 w-full border rounded-2xl">
            {`The specified city does not exist in our database`}
        </div>
    );
};
