import About from "./Components/About";
import Development from "./Components/Development";
import FAQ from "./Components/FAQ";
import FirstSection from "./Components/FirstSection";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import P2P from "./Components/P2P";
import RoadMap from "./Components/RoadMap";
import Slide from "./Components/Slide";
import Story from "./Components/Story";
import Team from "./Components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Story />
      <FirstSection />
      <Slide />
      <RoadMap />
      <Development />
      <P2P />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
