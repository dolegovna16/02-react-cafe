// src/main.tsx
// Нормалізація стилів
import "modern-normalize";
// Глобальні стилі (додатково)
import "./types/global.css";

import React from "react";

import { createRoot } from "react-dom/client";

import App from "../src/components/App/App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);