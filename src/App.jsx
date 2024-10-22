import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import Header from "./topNav";
import Prayer from "./Rosary";
import Litany from "./Prayers/litany"
import Body from "./body";
import Footer from "./footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,  // Animation duration in milliseconds
      once: true,      // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/how-to-pray-the-rosary" element={<Prayer />} />
          <Route path="/daily-prayer" element={<Litany />} />
        </Routes>
        <ChakraProvider>
        <Footer data-aos="fade-down" data-aos-delay="400"/>
        </ChakraProvider>
      </Router>
    </div>
  );
}

export default App;