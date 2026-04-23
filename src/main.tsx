import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/src/App";
import "@/app/globals.css";

document.documentElement.lang = "es";
document.documentElement.classList.add("bg-background");
document.title = "Hospital Diamante | Acapulco Zona Diamante";

const description = document.querySelector('meta[name="description"]');

if (description) {
  description.setAttribute(
    "content",
    "El hospital de lujo más moderno de Acapulco. Adquiere tu espacio de consultorios privados en Hospital Diamante, Zona Diamante.",
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);