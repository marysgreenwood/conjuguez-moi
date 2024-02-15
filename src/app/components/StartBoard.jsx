"use client";
import React from "react";
import { VerbOptionButtons } from "./VerbOptionButtons";

export const StartBoard = ({ handlePageChange, currVerb, setCurrVerb }) => {
  function chooseVerb(userChoice) {
    setCurrVerb(userChoice);
    console.log(currVerb);
  }
  const verbOptions = [
    { verbChoice: "parler" },
    { verbChoice: "avancer" },
    { verbChoice: "manger" },
    { verbChoice: "être" },
    { verbChoice: "avoir" },
  ];

  return (
    <section>
      <div className="flex justify-center">
        <div className="bg-[#008485] m-6">
          <div className="m-1 border-4 border-[#1c8f90] bg-[#ffffff] md:min-h-[300px] md:min-w-[500px] flex-col justify-center">
            <div className="flex-col justify-evenly">
              <div className="flex justify-center">
                <h3 className="md:mt-10 mt-2 py-4 text-black font-extrabold font-serif text-2xl">
                  Bienvenue!
                </h3>
              </div>
              <div className="flex justify-center">
                <p className="p-4 text-black text-xl">Choisissez un verb:</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 ml-2 md:ml-8 my-6">
                {verbOptions.map((verbo) => (
                  <VerbOptionButtons chooseVerb={chooseVerb} verbOption={verbo.verbChoice} />
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  className="rounded-full p-3 mt-5 my-6 hover:border-2  hover:border-[#008485] bg-[#FCC201] text-black font-bold"
                  onClick={() => handlePageChange("gameBoard")}
                >
                  Commencer!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
