import React, { useEffect } from "react";
import { verbs, shuffled } from "./verbs.js";

export const ScoreBoard = ({
  handlePageChange,
  score,
  setScore,
  userAnswers,
  setUserAnswers,
  currVerb,
}) => {
  const retry = () => {
    setScore(0);
    setUserAnswers([]);
    handlePageChange("gameBoard");
  };

  var correctConj = verbs[currVerb];

  var answArr = [];

  const populateAnswers = (orig, answ) => {
    for (let i = 0; i < orig.length; i++) {
      var answKey = orig[i];
      for (let j = 0; j < answ.length; j++) {
        var currAnsw = answ[j];
        if (answKey.subject === currAnsw.pronoun) {
          answArr.push(currAnsw);
        }
      }
    }
  };

  populateAnswers(verbs[currVerb], userAnswers);

  return (
    <section>
      <div className="flex justify-center m-8 text-black">
        <div className="bg-[#008485] ">
          <div className="bg-[#ffffff] m-1 border-4 border-[#1c8f90] md:min-h-[300px] md:min-w-[500px] flex-col justify-center">
            <div className="flex justify-end">
              <h3 className="p-4 font-bold">Score: {score}/9</h3>
            </div>
            <div className="flex justify-center">
              <h3 className="pt-4 font-extrabold text-2xl">Réponses</h3>
            </div>
            <div className="p-6">
              <table>
                <tbody>
                  <tr>
                    <td className="px-6 md:px-12 pb-2">je</td>
                    <td className="px-6 md:px-12 pb-2">
                      {correctConj[0].verb}
                    </td>
                    <td className="px-6 md:px-12 pb-2">{answArr[0].answer}</td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">tu</td>
                    <td className="px-6 md:px-12 py-2">
                      {correctConj[1].verb}
                    </td>
                    <td className="px-6 md:px-12 py-2">{answArr[1].answer}</td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">il</td>
                    <td className="px-6 md:px-12 py-2">
                      {correctConj[2].verb}
                    </td>
                    <td className="px-6 md:px-12 py-2">{answArr[2].answer}</td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">elle</td>
                    <td className="px-6 md:px-12 py-2">
                      {correctConj[3].verb}
                    </td>
                    <td className="px-6 md:px-12 py-2">{answArr[3].answer}</td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">on</td>
                    <td className="px-6 md:px-12 py-2">
                      {correctConj[4].verb}
                    </td>
                    <td className="px-6 md:px-12 py-2">{answArr[4].answer}</td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">nous</td>
                    <td className="px-6 md:px-12 py-2">
                      {correctConj[5].verb}
                    </td>
                    <td className="px-6 md:px-12 py-2">{answArr[5].answer}</td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">vous</td>
                    <td className="px-6 md:px-12 py-2">
                      {correctConj[6].verb}
                    </td>
                    <td className="px-6 md:px-12 py-2">{answArr[6].answer}</td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">ils</td>
                    <td className="px-6 md:px-12 py-2">
                      {correctConj[7].verb}
                    </td>
                    <td className="px-6 md:px-12 py-2">{answArr[7].answer}</td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">elles</td>
                    <td className="px-6 md:px-12 py-2">
                      {correctConj[8].verb}
                    </td>
                    <td className="px-6 md:px-12 py-2">{answArr[8].answer}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center">
              <button
                className="rounded-full p-3 mt-2 my-6 hover:border-2  hover:border-[#008485] bg-[#FCC201] text-black font-bold"
                type="submit"
                onClick={() => retry()}
              >
                Réessayer?
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
