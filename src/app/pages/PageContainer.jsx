"use client"
import React, { useState } from "react";
//pages
import { StartBoard } from "../components/StartBoard";
import GameBoard from "../components/GameBoard";
import { ScoreBoard } from "../components/ScoreBoard";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("startBoard");

  const renderPage = () => {
    if (currentPage === "startBoard") {
      return <StartBoard handlePageChange={handlePageChange} currentPage={currentPage}/>;
    }
    if (currentPage === "gameBoard") {
      return <GameBoard handlePageChange={handlePageChange} currentPage={currentPage}/>;
    }
    if (currentPage === "scoreBoard") {
      return <ScoreBoard handlePageChange={handlePageChange} currentPage={currentPage}/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      {renderPage()}
      {console.log(currentPage)}
    </div>
  );
}
