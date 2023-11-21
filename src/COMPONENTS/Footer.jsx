import React from "react";
import francisco from "../assets/FranciscoProfile.png";

export const Footer = () => {
  return (
    <>
      <div className="relative mt-[1em] sm:mt-0 p-2 flex flex-row justify-end items-center gap-0.5 text-sm">
        <p className="px-1 inline">developed by</p>
        <a
          href="https:franciscoagustinr.github.io/"
          target="_blank"
          className="font-bold underline flex flex-row justify-end items-center gap-0.5"
        >
          Francisco
          <img src={francisco} className="mx-1 w-12" />
        </a>
      </div>
    </>
  );
};
