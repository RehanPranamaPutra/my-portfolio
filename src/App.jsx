// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hyperspeed from "./ui/Hyperspeed/Hyperspeed";
import HeroSection from "./components/HeroSection";
import LoadingScreen from "./components/LoadingScreen";
import AboutSection from "./components/AboutSection";
import PageTransition from "./components/PageTransition";
import SkillsSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
// import SplashCursor from "./ui/SplashCursor/SplashCursor";

function App() {
  // const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading && <LoadingScreen onFinish={() => setLoading(false)} />} */}

      {/* Background Hyperspeed */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Hyperspeed />
      </div>

      <Navbar />

      {/* ✅ Bungkus semua section dalam animasi */}
      <div className="border">
        <PageTransition>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
        </PageTransition>
      </div>
    </>
  );
}

export default App;
