import React from "react";
//function to render student responses
export const ScoreBoard = ({ handlePageChange }) => {
  return (
    <section>
      <div className="flex justify-center m-8">
        <div className="border border-white rounded-xl">
          <div className="flex justify-end">
            <h3 className="p-4 ">Score</h3>
          </div>
          <div className="flex justify-center">
            <h3 className="py-4 ">Réponses</h3>
          </div>
          <div className="flex justify-center p-6">
            <table>
              <tr>
                <td className="p-2">je</td>
                <td className="p-2">suis</td>
                <td className="p-2">SA</td>
              </tr>
              <tr>
                <td className="p-2">tu</td>
                <td className="p-2">es</td>
                <td className="p-2">SA</td>
              </tr>
              <tr>
                <td className="p-2">il</td>
                <td className="p-2">est</td>
                <td className="p-2">SA</td>
              </tr>
              <tr>
                <td className="p-2">elle</td>
                <td className="p-2">est</td>
                <td className="p-2">SA</td>
              </tr>
              <tr>
                <td className="p-2">on</td>
                <td className="p-2">est</td>
                <td className="p-2">SA</td>
              </tr>
              <tr>
                <td className="p-2">nous</td>
                <td className="p-2">sommes</td>
                <td className="p-2">SA</td>
              </tr>
              <tr>
                <td className="p-2">vous</td>
                <td className="p-2">êtes</td>
                <td className="p-2">SA</td>
              </tr>
              <tr>
                <td className="p-2">ils</td>
                <td className="p-2">sont</td>
                <td className="p-2">SA</td>
              </tr>
              <tr>
                <td className="p-2">elles</td>
                <td className="p-2">sont</td>
                <td className="p-2">SA</td>
              </tr>
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
