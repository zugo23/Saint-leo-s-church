import { useState, useEffect } from "react";
import { ChakraProvider, IconButton } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import img from "./Images/WhatsApp Image 2024-10-12 at 5.05.06 PM (1).jpeg";
import test from "./Images/WhatsApp Image 2024-10-12 at 5.05.07 PM (1).jpeg";
import "./App.css";
import Body2 from './body2';
import Prayer from './prayer';
import Clergy from './clergy';
import Activity from './Activities'
import Footer from './footer'
import HistoryModal from './historyModal'; // Import the modal

export default function Body() {
  const images = [img, test];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [showScrollTop, setShowScrollTop] = useState(false); // State for scroll-to-top icon

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 3000,  // Animation duration in milliseconds
      once: true,      // Whether animation should happen only once
    });
  }, []);

  // Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Show "scroll to top" icon when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show when scrolled 300px down
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal state
  };

  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden" data-aos="fade-in">
        <img
          alt="Your Company"
          src={images[currentIndex]}
          className="h-full w-full transform animate-zoomBlur"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <p className="text-white text-7xl font-bold text-center font-sans sm:text-4xl md:text-3xl lg:text-5xl">
            Saint Leo's <br />
            <span className="text-7xl font-bold">Catholic Church</span>
          </p>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-white" : "bg-amber-900"}`}
            />
          ))}
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <Body2 toggleModal={toggleModal} /> {/* Pass toggleModal as prop */}
      </div>
      <div data-aos="fade-down" data-aos-delay="200">
        <Prayer />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <Clergy />
      </div>
      <div data-aos="fade-down" data-aos-delay="400">
        <Activity />
      </div>
      <ChakraProvider>
      <div data-aos="fade-down" data-aos-delay="400">
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <IconButton
          icon={<ArrowUpIcon />}
          onClick={scrollToTop}
          position="fixed"
          bottom="50px"
          right="50px"
          bgColor="amber.900"
          color="amber.900"
          _hover={{ bgColor: "gray.500", color: "white" }}
          aria-label="Scroll to top"
          zIndex={10}
        />
      )}

      </ChakraProvider>

      {/* Render the modal */}
      <HistoryModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
}