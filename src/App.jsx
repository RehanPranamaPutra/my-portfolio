import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hyperspeed from "./ui/Hyperspeed/Hyperspeed.jsx";
import HeroSection from "./components/HeroSection.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import AboutSection from "./components/AboutSection.jsx";
import PageTransition from "./components/PageTransition.jsx";
import SkillsSection from "./components/SkillSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

// import SplashCursor from "./ui/SplashCursor/SplashCursor";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Background Hyperspeed selalu ditampilkan */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1, // zIndex rendah agar berada di belakang
        }}
      >
        <Hyperspeed />
        
      </div>

      {/* Tampilkan LoadingScreen jika state loading adalah true */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {/* Tampilkan sisa aplikasi hanya jika state loading adalah false */}
      {!loading && (
        <>
          <Navbar />

          {/* Bungkus semua section dalam animasi PageTransition */}
          <div>
            <PageTransition>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectSection />
              <ContactSection />
            </PageTransition>
          </div>
        </>
      )}
    </>
  );
}

export default App;
