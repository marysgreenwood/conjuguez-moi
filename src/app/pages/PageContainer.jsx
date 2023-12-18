"use client";
import React, { useState } from "react";
//pages
import { StartBoard } from "../components/StartBoard";
import GameBoard from "../components/GameBoard";
import { ScoreBoard } from "../components/ScoreBoard";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("startBoard");
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const renderPage = () => {
    if (currentPage === "startBoard") {
      return (
        <StartBoard
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      );
    }
    if (currentPage === "gameBoard") {
      return (
        <GameBoard
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          score={score}
          setScore={setScore}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          // updateAnswers={updateAnswers}
        />
      );
    }
    if (currentPage === "scoreBoard") {
      return (
        <ScoreBoard
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          score={score}
          userAnswers={userAnswers}
        />
      );
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return <div>{renderPage()}</div>;
}
