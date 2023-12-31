import React, { useEffect } from "react";
//import etre from "./verbs.js";

export const ScoreBoard = ({
  handlePageChange,
  score,
  setScore,
  userAnswers,
  setUserAnswers,
}) => {
  const retry = () => {
    setScore(0);
    setUserAnswers([]);
    handlePageChange("gameBoard");
  };

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
                    <td className="px-6 md:px-12 pb-2">suis</td>
                    <td className="px-6 md:px-12 pb-2">
                      {userAnswers[4].answer}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">tu</td>
                    <td className="px-6 md:px-12 py-2">es</td>
                    <td className="px-6 md:px-12 py-2">
                      {userAnswers[7].answer}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">il</td>
                    <td className="px-6 md:px-12 py-2">est</td>
                    <td className="px-6 md:px-12 py-2">
                      {userAnswers[2].answer}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">elle</td>
                    <td className="px-6 md:px-12 py-2">est</td>
                    <td className="px-6 md:px-12 py-2">
                      {userAnswers[0].answer}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">on</td>
                    <td className="px-6 md:px-12 py-2">est</td>
                    <td className="px-6 md:px-12 py-2">
                      {userAnswers[6].answer}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">nous</td>
                    <td className="px-6 md:px-12 py-2">sommes</td>
                    <td className="ppx-6 md:px-12 py-2">
                      {userAnswers[5].answer}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">vous</td>
                    <td className="px-6 md:px-12 py-2">êtes</td>
                    <td className="px-6 md:px-12 py-2">
                      {userAnswers[8].answer}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">ils</td>
                    <td className="px-6 md:px-12 py-2">sont</td>
                    <td className="px-6 md:px-12 py-2">
                      {userAnswers[3].answer}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 md:px-12 py-2">elles</td>
                    <td className="px-6 md:px-12 py-2">sont</td>
                    <td className="px-6 md:px-12 py-2">
                      {userAnswers[1].answer}
                    </td>
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
