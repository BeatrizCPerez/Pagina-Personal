import React from "react";

import Iam from "./components/Iam";
import Technologies from "./components/Technologies";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <div>
       <Navbar />
        <Iam />
        <Technologies />
        <Jobs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

