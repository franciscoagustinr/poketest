import React from "react";
import psyduck from "../assets/psyduck.png";

export const Error = () => {
  return (
    <div className="h-[77vh] flex flex-col items-center justify-center sm:justify-end text-center">
      <h1 className="z-10 absolute top-[10%] text-[red] text-[12em] sm:text-[6em] font-bold ">
        ¡Ooops! 404
      </h1>

      <img src={psyduck} className="z-20 w-[15em]" />
    </div>
  );
};
