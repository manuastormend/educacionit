import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import SeleccionarBebida from "./components/SeleccionarBebida";
import ConfirmarCompra from "./components/ConfirmarCompra";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/bebida/:id"
          element={<SeleccionarBebida></SeleccionarBebida>}
        />
        <Route path="/carrito" element={<ConfirmarCompra />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
