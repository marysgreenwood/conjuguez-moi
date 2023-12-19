import React, { useEffect } from "react";
//import etre from "./verbs.js";

export const ScoreBoard = ({ handlePageChange, score, userAnswers }) => {
  //sort userAnswers array
  // var results = [];
  // const sortResults = (arr1, arr2) => {
  //   for (let i = 0; i < arr1.length; i++) {
  //     var pron = arr1[i].pronoun;
  //     var answ = arr1[i].answer;
  //     for (let j = 0; j < arr2.length; j++) {
  //       var subj = arr2[j].subject;
  //       if (pron === subj) {
  //         results = [...results, answ];
  //       }
  //       debugger;
  //     }
  //   }
  // };
  // useEffect(() => {
  //   // sortResults(userAnswers, etre);
  //   console.log("etre", etre, "userAnswers", userAnswers);
  // }, []);
  return (
    <section>
      <div className="flex justify-center m-8 text-black">
        <div className="bg-[#008485] ">
          <div className="bg-[#ffffff] m-1 border-4 border-[#1c8f90] md:min-h-[300px] md:min-w-[500px] flex-col justify-center">
            <div className="flex justify-end">
              <h3 className="p-4 font-bold">Score: {score}/9</h3>
            </div>
            <div className="flex justify-center">
              <h3 className="py-4 font-extrabold text-2xl">Réponses</h3>
            </div>
            <div className="p-6">
              <table>
                <tbody>
          
                  <tr>
                    <td className="p-4">je</td>
                    <td className="p-4">suis</td>
                    <td className="p-4">{userAnswers[4].answer}</td>
                  </tr>
                  <tr>
                    <td className="p-4">tu</td>
                    <td className="p-4">es</td>
                    <td className="p-4">{userAnswers[7].answer}</td>
                  </tr>
                  <tr>
                    <td className="p-4">il</td>
                    <td className="p-4">est</td>
                    <td className="p-4">{userAnswers[2].answer}</td>
                  </tr>
                  <tr>
                    <td className="p-4">elle</td>
                    <td className="p-4">est</td>
                    <td className="p-4">{userAnswers[0].answer}</td>
                  </tr>
                  <tr>
                    <td className="p-4">on</td>
                    <td className="p-4">est</td>
                    <td className="p-4">{userAnswers[6].answer}</td>
                  </tr>
                  <tr>
                    <td className="p-4">nous</td>
                    <td className="p-4">sommes</td>
                    <td className="p-4">{userAnswers[5].answer}</td>
                  </tr>
                  <tr>
                    <td className="p-4">vous</td>
                    <td className="p-4">êtes</td>
                    <td className="p-4">{userAnswers[8].answer}</td>
                  </tr>
                  <tr>
                    <td className="p-4">ils</td>
                    <td className="p-4">sont</td>
                    <td className="p-4">{userAnswers[3].answer}</td>
                  </tr>
                  <tr>
                    <td className="p-4">elles</td>
                    <td className="p-4">sont</td>
                    <td className="p-4">{userAnswers[1].answer}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center">
              <button
                className="rounded-full p-3 mt-2 my-6 hover:border-2  hover:border-[#008485] bg-[#FCC201] text-black font-bold"
                onClick={() => handlePageChange("gameBoard")}
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
