import React from "react";
import { typeColors } from "./Colors";
import { Tables } from "./Tables";

export const About = ({ types, height, weight, abilities, statsValue }) => {
  console.log(`Type: ${types[0]}`);
  return (
    <>
      <table
        className={`text-[#FAFAFA] absolute flex flex-row sm:flex-col items-center justify-around w-[100%] sm:p-1 p-2 bottom-0 sm:bottom-0 border-separate border-spacing-x-[2em] border-spacing-y-[0.2em] rounded-3xl 
        myBoxShadow overflow-hidden text-md sm:text-sm `}
        style={{
          backgroundColor: typeColors[types[0]],
        }}
      >
        <Tables
          types={types}
          height={height}
          weight={weight}
          abilities={abilities}
          statsValue={statsValue}
        />
      </table>
    </>
  );
};
