"use client";
import React from "react";

export const StartBoard = ({handlePageChange}) => {
  return (
    <section>
      <div className="flex justify-center m-8">
        <div className="border border-white rounded-xl">
          <div className="flex justify-center">
            <h3 className="py-4 ">Bienvenue!</h3>
          </div>
          <div className="flex justify-center">
            <p className="p-4 ">Pratiquons le verbe être!</p>
          </div>
          <div className="flex justify-center">
            <button
              className="rounded-full p-2 mb-4 border border-white"
              onClick={() => handlePageChange("gameBoard")}
            >
              Commencer!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
