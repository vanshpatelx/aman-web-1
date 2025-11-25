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
import AccessCTAPage from "./pages/ContentSections/AccessCTAPage.tsx";
import BlogPage from "./pages/ContentSections/BlogPage.tsx";
import EbooksPage from "./pages/ContentSections/EbooksPage.tsx";
import IndustryNewsPage from "./pages/ContentSections/IndustryNewsPage.tsx";
import PodcastsPage from "./pages/ContentSections/PodcastsPage.tsx";
import WhitePapersPage from "./pages/ContentSections/WhitePapersPage.tsx";
import Brokering from "./pages/SolutionScetions/Brokering.tsx";
import Consignment from "./pages/SolutionScetions/Consignment.tsx";
import Disposition from "./pages/SolutionScetions/Disposition.tsx";
import Inspection from "./pages/SolutionScetions/Inspection.tsx";
import Logistics from "./pages/SolutionScetions/Logistics.tsx";

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

       {/* Content Section Route */}
      <Route path="/Accessctapage" element={<AccessCTAPage/>} />
      <Route path="/BlogPage" element={<BlogPage/>} />
      <Route path="/EbooksPage" element={<EbooksPage/>} />
      <Route path="/IndustryNewsPage" element={<IndustryNewsPage/>} />
      <Route path="/PodcastsPage" element={<PodcastsPage/>} />
      <Route path="/WhitePapersPage" element={<WhitePapersPage/>} />

       {/* Solutions Sceiton Route */}
       <Route path="/Brokering" element={<Brokering/>} />
      <Route path="/Consignment" element={<Consignment/>} />
      <Route path="/Disposition" element={<Disposition/>} />
      <Route path="/Inspection" element={<Inspection/>} />
      <Route path="/Logistics" element={<Logistics/>} />

    </Routes>
  );
}

export default App;
