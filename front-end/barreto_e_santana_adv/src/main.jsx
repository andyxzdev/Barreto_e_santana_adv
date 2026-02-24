import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

import App from "./pages/home/App.jsx";
import Sobre from "./pages/sobre/Sobre.jsx";
import Politprivac from "./pages/politprivac/Politprivac.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/politprivac" element={<Politprivac />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
