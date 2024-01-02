"use client";
import React, { useState, useEffect } from "react";
import { etre, arr } from "./verbs.js";

//FIGURE OUT HOW TO SHARE SCORE VARIABLE IN GAMEBOARD AND SCOREBOARD COMPONENTS

const GameBoard = ({
  handlePageChange,
  score,
  setScore,
  userAnswers,
  setUserAnswers,
}) => {
  //state variables
  const [activeQuestion, setActiveQuestion] = useState(0);

  const updateAnswers = (userAnswer) =>
    setUserAnswers([...userAnswers, userAnswer]);

  // console.log("original array", etre, "shuffled arr", arr);

  //sets pronoun and conjugation values for current question
  const { subject, verb } = arr[activeQuestion];

  //   Select and check answer
  function onAnswerSubmit(e, question, response) {
    e.preventDefault();
    response = response.toLowerCase().trim();
    //object stores user answer
    var currentAnswer = { pronoun: question, answer: response };
    //pushes answer to array of user answers
    updateAnswers(currentAnswer);
    //check answer & adjust score
    if (response == arr[activeQuestion].verb) {
      setScore(score + 1);
    }
    //move to next pronoun or move to scoreboard
    if (activeQuestion !== arr.length - 1) {
      setActiveQuestion(activeQuestion + 1);
      document.getElementById("reponse").value = "";
    } else {
      handlePageChange("scoreBoard");
    }
  }

  //adds selected accent to answer input
  // function addAccent (e)  {
  //   console.log(e.target.innerText);
  //   debugger;
  // };
  function addAccent(e, currentAnsw) {
    e.preventDefault();
    currentAnsw = currentAnsw.concat(e.target.innerText);
    console.log(currentAnsw);
    reponse.value = currentAnsw;
  }

  // useEffect(() => {
  //   // sortResults(userAnswers, etre);
  //   console.log("etre", etre, "array", arr);
  // }, []);

  return (
    <section>
      <div className="flex justify-center m-8">
        <div className="bg-[#1c8f90]">
          <div className="bg-[#FFFFFF] m-1 border-4 border-[#008485]  md:min-h-[300px] md:min-w-[500px] flex-col justify-center">
            <div className="flex justify-end">
              <h3 className="px-4 pt-4 text-black">Score: {score}</h3>
            </div>
            <div>
              <h3 className="mt-2 p-4 mx-4 md:ml-24 text-black font-extrabold text-2xl">
                {arr[activeQuestion].subject}
              </h3>
            </div>

            <form action="">
              <div className="mx-2 mb-2 flex justify-evenly">
                <button
                  className="text-black border border-[#008485] px-2 rounded-md mx-2"
                  type="button"
                  onClick={(event) => addAccent(event, reponse.value)}
                >
                  à
                </button>
                <button
                  className="text-black border border-[#008485] px-2 rounded-md mx-2"
                  type="button"
                  onClick={(event) => addAccent(event, reponse.value)}
                >
                  â
                </button>
                <button
                  className="text-black border border-[#008485] px-2 rounded-md mx-2"
                  type="button"
                  onClick={(event) => addAccent(event, reponse.value)}
                >
                  ç
                </button>
                <button
                  className="text-black border border-[#008485] px-2 rounded-md mx-2"
                  type="button"
                  onClick={(event) => addAccent(event, reponse.value)}
                >
                  é
                </button>
                <button
                  className="text-black border border-[#008485] px-2 rounded-md mx-2"
                  type="button"
                  onClick={(event) => addAccent(event, reponse.value)}
                >
                  è
                </button>
                <button
                  className="text-black border border-[#008485] px-2 rounded-md mx-2"
                  type="button"
                  onClick={(event) => addAccent(event, reponse.value)}
                >
                  ë
                </button>
              </div>
              <div className="mx-2 flex justify-evenly mb-1">
                <button
                  className="text-black border border-[#008485] px-2 rounded-md mx-2"
                  type="button"
                  onClick={(event) => addAccent(event, reponse.value)}
                >
                  ê
                </button>
                <button
                  className="text-black border border-[#008485] px-2 rounded-md mx-2"
                  type="button"
                  onClick={(event) => addAccent(event, reponse.value)}
                >
                  î
                </button>
                <button
                  className="text-black border border-[#008485] px-2 rounded-md mx-2"
                  type="button"
                  onClick={(event) => addAccent(event, reponse.value)}
                >
                  ï
                </button>
                <button
                  className="text-black border border-[#008485] px-2 rounded-md mx-2"
                  type="button"
                  onClick={(event) => addAccent(event, reponse.value)}
                >
                  ô
                </button>
                <button
                  className="text-black border border-[#008485] px-2 rounded-md mx-2"
                  type="button"
                  onClick={(event) => addAccent(event, reponse.value)}
                >
                  ù
                </button>
                <button
                  className="text-black border border-[#008485] px-2 rounded-md mx-2"
                  type="button"
                  onClick={(event) => addAccent(event, reponse.value)}
                >
                  ü
                </button>
              </div>
              <input
                type="text"
                id="reponse"
                name="reponse"
                placeholder="réponse"
                autoFocus
                className="mt-2 p-4 mx-7 md:ml-28 border-2 border-[#1C8F90] rounded-xl text-black"
              />

              <div className="flex justify-end">
                {/* onClick saves user response to local memory, records if answer matches or does not match correct conjugation */}
                <button
                  className="rounded-full p-3 mx-7 my-6 md:mx-40 hover:border-2  hover:border-[#008485] bg-[#FCC201] text-black font-bold"
                  onClick={(event) =>
                    onAnswerSubmit(
                      event,
                      arr[activeQuestion].subject,
                      reponse.value
                    )
                  }
                >
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameBoard;
