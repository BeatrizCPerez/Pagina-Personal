import React from "react";

import Quiensoy from "./components/Quiensoy";
import Tecnologias from "./components/Tecnologias";
import Trabajos from "./components/Trabajos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <div>
       <Navbar />
        <Quiensoy />
        <Tecnologias />
        <Trabajos />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

