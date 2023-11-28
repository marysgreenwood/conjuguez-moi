import React from "react";

//verb object stores correct conjugation
var etre = {
  je: "suis",
  tu: "es",
  il: "est",
  elle: "est",
  on: "est",
  nous: "sommes",
  vous: "êtes",
  ils: "sont",
  elles: "sont",
};

//function to cycle randomly through verb object keys

const GameBoard = ({ handlePageChange }) => {
  return (
    <section>
      <div className="flex justify-center m-8">
        <div className="border border-white rounded-xl">
          <div>
            <h3 className="px-4 pt-4">pronom</h3>
          </div>
          <div className="flex justify-center">
            {/* input saved somehow as userAnswer */}
            <input
              type="text"
              id="reponse"
              name="reponse"
              placeholder="  réponse"
              className="m-4 py-2 rounded-xl"
            />
          </div>
          <div className="flex justify-center">
            {/* onClick saves user response to local memory, records if answer matches or does not match correct conjugation */}
            <button
              className="rounded-full p-3 mb-4 border border-white"
              onClick={() => handlePageChange("scoreBoard")}
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameBoard;
