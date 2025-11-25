import { Routes, Route } from "react-router-dom";

import './App.css'
import Hero from './pages/Hero.tsx'
import About from './pages/About.tsx'
import Footer from './pages/Footer.tsx'
import Services from './pages/Services.tsx'
import AboutPage from "./pages/AboutPages/AboutPage.tsx";
import { Equipment } from "./pages/Equipment.tsx";
import { MarqueeSection } from "./pages/MarqueeSection.tsx";
import Products from "./pages/Products.tsx";
import Numbers from "./pages/Numbers.tsx";
import { AuroraBackgroundProps } from "./components/AuroraBackground.tsx";

function App() {
  return (
    <Routes>

      {/* Home Route — includes everything */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <About />
            <Numbers/>
            <Services />
            <Equipment/>
            <MarqueeSection/>
            <Products/>
            <Footer />
          </>
        }
      />

      {/* Other Routes — empty for now */}
      <Route path="/about" element={<AboutPage/>} />

    </Routes>
  );
}

export default App;
