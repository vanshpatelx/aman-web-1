import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { SmoothScroll } from "./components/SmoothScroll.tsx";
import './i18n.ts'

const root = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </BrowserRouter>
);

// Use hydration for SSR in production
if (import.meta.env.PROD) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
