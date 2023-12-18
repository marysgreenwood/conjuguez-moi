"use client";
import React, { useState, useEffect } from "react";
import etre from "./verbs.js";

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

  const [userAnswerIndex, setUserAnswerIndex] = useState(null);
  const updateAnswers = (userAnswer) =>
    setUserAnswers([...userAnswers, userAnswer]);

  //shuffle verb array
  var arr = etre.sort((a, b) => {
    if (a.subject < b.subject) {
      return -1;
    }
    if (a.subject > b.subject) {
      return 1;
    }
    return 0;
  });

  //sets pronoun and conjugation values for current question
  const { subject, verb } = arr[activeQuestion];

  //   Select and check answer
  function onAnswerSubmit(e, question, res) {
    e.preventDefault();
    var response = res.toLowerCase().trim();
    //object stores user answer
    var currentAnswer = { pronoun: question, answer: response };
    //pushes answer to array of user answers
    updateAnswers(currentAnswer);
    //check answer & adjust score
    if (res == arr[activeQuestion].verb) {
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

  useEffect(() => {
    // sortResults(userAnswers, etre);
    console.log("etre", etre, "array", arr);
  }, []);

  return (
    <section>
      <div className="flex justify-center m-8">
        <div className="border border-white rounded-xl">
          <div className="flex justify-end">
            <h3 className="px-4 pt-4">Score: {score}</h3>
          </div>
          <div>
            <h3 className="px-4 pt-4">{arr[activeQuestion].subject}</h3>
          </div>
          <form action="">
            <div className="flex justify-center">
              <input
                type="text"
                id="reponse"
                name="reponse"
                placeholder="réponse"
                className="m-4 p-2 rounded-xl text-black"
              />
            </div>
            <div className="flex justify-center">
              {/* onClick saves user response to local memory, records if answer matches or does not match correct conjugation */}
              <button
                className="rounded-full p-3 mb-4 border border-white"
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
    </section>
  );
};

export default GameBoard;
