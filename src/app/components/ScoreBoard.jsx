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
      <div className="flex justify-center m-8">
        <div className="border border-white rounded-xl">
          <div className="flex justify-end">
            <h3 className="p-4 ">Score: {score}/9</h3>
          </div>
          <div className="flex justify-center">
            <h3 className="py-4 ">Réponses</h3>
          </div>
          <div className="flex justify-center p-6">
            <table>
              <tbody>
                <tr>
                  <td className="p-2">je</td>
                  <td className="p-2">suis</td>
                  <td className="p-2">{userAnswers[4].answer}</td>
                </tr>
                <tr>
                  <td className="p-2">tu</td>
                  <td className="p-2">es</td>
                  <td className="p-2">{userAnswers[7].answer}</td>
                </tr>
                <tr>
                  <td className="p-2">il</td>
                  <td className="p-2">est</td>
                  <td className="p-2">{userAnswers[2].answer}</td>
                </tr>
                <tr>
                  <td className="p-2">elle</td>
                  <td className="p-2">est</td>
                  <td className="p-2">{userAnswers[0].answer}</td>
                </tr>
                <tr>
                  <td className="p-2">on</td>
                  <td className="p-2">est</td>
                  <td className="p-2">{userAnswers[6].answer}</td>
                </tr>
                <tr>
                  <td className="p-2">nous</td>
                  <td className="p-2">sommes</td>
                  <td className="p-2">{userAnswers[5].answer}</td>
                </tr>
                <tr>
                  <td className="p-2">vous</td>
                  <td className="p-2">êtes</td>
                  <td className="p-2">{userAnswers[8].answer}</td>
                </tr>
                <tr>
                  <td className="p-2">ils</td>
                  <td className="p-2">sont</td>
                  <td className="p-2">{userAnswers[3].answer}</td>
                </tr>
                <tr>
                  <td className="p-2">elles</td>
                  <td className="p-2">sont</td>
                  <td className="p-2">{userAnswers[1].answer}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <button
              className="rounded-full p-2 mb-4 border border-white"
              onClick={() => handlePageChange("gameBoard")}
            >
              Réessayer?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
