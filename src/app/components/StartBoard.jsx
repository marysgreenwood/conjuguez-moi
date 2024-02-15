"use client";
import React from "react";

export const StartBoard = ({ handlePageChange, currVerb, setCurrVerb }) => {
  function chooseVerb(userChoice) {
    setCurrVerb(userChoice);
    console.log(currVerb);
  }

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
              <div className="flex justify-evenly">
                <button
                  className="rounded-2xl p-3 mt-5 my-6 border-2 hover:border-[#00d0d2] border-[#008485] text-black font-bold w-20 text-center focus:bg-[#00d0d2]"
                  onClick={() => chooseVerb("être")}
                >
                  être
                </button>
                <button
                  className="rounded-2xl py-3 mt-5 my-6 border-2 hover:border-[#00d0d2] border-[#008485] text-black font-bold w-20 text-center focus:bg-[#00d0d2]"
                  onClick={() => chooseVerb("parler")}
                >
                  parler
                </button>
              </div>
              <div className="flex justify-evenly">
                <button
                  className="rounded-2xl py-3 mt-5 my-6 border-2 hover:border-[#00d0d2] border-[#008485] text-black font-bold w-20 text-center focus:bg-[#00d0d2]"
                  onClick={() => chooseVerb("manger")}
                >
                  manger
                </button>
                <button
                  className=" rounded-2xl py-3 mt-5 my-6 border-2 hover:border-[#00d0d2] border-[#008485] text-black font-bold w-20 text-center focus:bg-[#00d0d2]"
                  onClick={() => chooseVerb("avancer")}
                >
                  avancer
                </button>
                <button
                  className=" rounded-2xl py-3 mt-5 my-6 border-2 hover:border-[#00d0d2] border-[#008485] text-black font-bold w-20 text-center focus:bg-[#00d0d2]"
                  onClick={() => chooseVerb("avoir")}
                >
                  avoir
                </button>
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
