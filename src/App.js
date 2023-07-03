import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Leading from "./components/Leading/Leading";
import Download from "./components/Download/Download";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="bg-white">
      <Navbar/>
      <Hero/>
      <Services/>
      <Leading/>
      <Download/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
