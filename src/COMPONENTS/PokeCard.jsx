import React from "react";
import { typeColorsBackground, typeColors } from "./Colors";
import poketransparent from "../assets/pokeball-transparent.png";

export const PokeCard = ({ id, name, img, types }) => {
  const pokemonNumber = `#${id.toString().padStart(3, "000")}`;

  return (
    <div
      id="card"
      key={id}
      className={`relative overflow-hidden group flex flex-col items-center p-1 gap-[1px]`}
    >
      <span className="absolute top-[2%] right-1 sm:text-[2.4em] md:text-[3.5em] xl:text-[6em] font-bold z-0 opacity-10 ">
        {pokemonNumber}
      </span>
      <h2
        className={`sm:text-[2em] md:text-[1.7em] xl:text-[3em] font-bold uppercase text-[#FAFAFA] z-10 `}
      >
        {name}
      </h2>
      <img
        src={img}
        alt="poke-img"
        className=" poke-img z-10 w-52 group-hover:scale-[135%] transition-all duration-200 "
      />
      <img
        src={poketransparent}
        alt="poke-transp"
        className="absolute sm:-bottom-[15%] -left-[30%] -bottom-[30%]  z-0 opacity-20  "
      />

      <div className="w-auto sm:w-[50%] absolute sm:right-1 sm:bottom-1 md:bottom-1 right-5 bottom-4 text-center text-[#FAFAFA] text-xs font-bold">
        <p
          className={`my-1 py-[4px] sm:py-[1px] px-4 rounded-full border-[1px] border-[#fafafa]  `}
        >
          {types[0]}
        </p>
        {types[1] && (
          <p className="my-1 py-[4px] sm:py-[1px] px-4 rounded-full border-[1px] border-[#fafafa]  ">
            {types[1]}
          </p>
        )}
      </div>
    </div>
  );
};
