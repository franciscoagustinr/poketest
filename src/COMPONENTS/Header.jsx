import React from "react";
import pokeball from "../assets/pokeball.png";

export const Header = () => {
  return (
    <div className="  py-2 text-center underline text-[3em] text-[#5E5F61] font-bold py-4">
      P<img src={pokeball} className="inline w-[40px]" />
      kédex
    </div>
  );
};
