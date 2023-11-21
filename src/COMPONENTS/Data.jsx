import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PokeCard } from "./PokeCard";
import { typeColorsBackground, typeColors } from "./Colors";
import { getPokemons } from "./Utilities";

export const Data = () => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    getPokemons(setPoke);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-[1.5px] px-12 sm:grid-cols-1 md:grid-cols-3  gap-4 min-h-[100vh]">
        {poke.map((i) => (
          <Link
            key={i.id}
            to={`/pokemons/${i.id}`}
            className={`relative m-1 rounded-[0.7em] border-2 transition duration-300 ease-in-out hover:border-[#FAFAFA] `}
            style={{
              backgroundColor: typeColorsBackground[i.types[0].type.name],
              borderColor: typeColors[i.types[0].type.name],
            }}
          >
            <PokeCard
              id={i.id}
              name={i.name}
              img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i.id}.png`}
              types={i.types.map((type) => (
                <span key={type.type.name}>{type.type.name}</span>
              ))}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
