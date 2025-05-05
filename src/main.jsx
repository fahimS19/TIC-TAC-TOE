import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Game from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="text-center font-bold mb-4 text-2xl">
      Welcome to TIC-TAC-TOE
    </div>
    <Game />
  </StrictMode>
);
