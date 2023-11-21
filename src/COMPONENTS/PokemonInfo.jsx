import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { typeColorsBackground, typeColors } from "./Colors";
import { About } from "./About";
import { getPokemonInfo } from "./Utilities";
import backarrow from "../assets/backarrow.png";

export const PokemonInfo = () => {
  const { pokeId } = useParams();
  const [currentPokemon, setCurrentPokemon] = useState(null);

  useEffect(() => {
    getPokemonInfo(pokeId, setCurrentPokemon);
  }, [pokeId]);
  if (!currentPokemon) {
    return <div>Cargando...</div>;
  }

  const { id, types, name, height, weight, abilities, stats } = currentPokemon;
  const pokemonNumber = `#${id.toString().padStart(3, "000")}`;

  const TYPE_ONE =
    currentPokemon.types[0].type.name.charAt(0).toUpperCase() +
    currentPokemon.types[0].type.name.slice(1);
  const TYPE_TWO =
    currentPokemon.types[1] &&
    currentPokemon.types[1].type.name.charAt(0).toUpperCase() +
      currentPokemon.types[1].type.name.slice(1);

  return (
    <div className=" flex flex-col justify-center sm:justify-start sm:pt-4 md:justify-start md:pt-12 items-center min-h-[77vh] sm:min-h-[100vh]  ">
      <div
        className="shadow-2xl absolute sm:w-[90%] md:w-[90%] lg:w-[60vw] flex flex-col rounded-3xl border-2 lg:h-[70vh] sm:h-[45em] overflow-hidden"
        style={{
          backgroundColor:
            typeColorsBackground[currentPokemon.types[0].type.name],
          borderColor: typeColors[currentPokemon.types[0].type.name],
        }}
      >
        <Link to="/inicio">
          <img
            src={backarrow}
            className="absolute z-20 py-1 top-2 sm:top-1 left-2 sm:left-1 w-[4%] sm:w-[10%]"
          />
        </Link>
        <span className="absolute top-[11%] sm:top-[5%] right-[2%] sm:right-[40%] text-[9em] sm:text-[5em] font-bold z-0 opacity-10 ">
          {pokemonNumber}
        </span>

        <div className="absolute sm:right-[1.1em] right-[10em]  top-[22em] text-center text-[#FAFAFA] text-xs font-bold z-20">
          <p className="my-1 py-[6px] px-8 rounded-full border-[1px] border-[#fafafa]">
            {TYPE_ONE}
          </p>
          {TYPE_TWO && (
            <p className="my-1 py-[6px] px-8 rounded-full border-[1px] border-[#fafafa]">
              {TYPE_TWO}
            </p>
          )}
        </div>
        <div className=" flex flex-col items-center ">
          <h2 className="text-center sm:text-[2.5em] md:text-[5.5em] lg:text-[6em] sm:mt-7 font-bold uppercase text-[#FAFAFA] z-0 tracking-wider	">
            {name}
          </h2>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemon.id}.png`}
            alt="poke-img"
            className=" w-[350px] relative bottom-[5em] sm:bottom-[1em] z-10"
          />
          <div className="relative bottom-[10em] sm:bottom-[7.2em] flex flex-row gap-1 z-10">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemon.id}.png`}
              alt="poke-img"
              className=" w-[80px]  z-10  rounded-full border-2 "
              style={{
                backgroundColor: typeColors[currentPokemon.types[0].type.name],
                borderColor:
                  typeColorsBackground[currentPokemon.types[0].type.name],
              }}
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${currentPokemon.id}.png`}
              alt="poke-img"
              className=" w-[80px] z-10  rounded-full border-2 "
              style={{
                backgroundColor: typeColors[currentPokemon.types[0].type.name],
                borderColor:
                  typeColorsBackground[currentPokemon.types[0].type.name],
              }}
            />{" "}
          </div>
        </div>
        <About
          types={types.map((type) => type?.type.name)}
          height={height}
          weight={weight}
          abilities={abilities.map((ability) => ability?.ability.name)}
          stats={stats.map((stat) => stat?.stat.name)}
          statsValue={stats.map((stat) => stat?.base_stat)}
        />
      </div>
    </div>
  );
};
