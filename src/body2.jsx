import { useState, useEffect } from "react";
import Mary from "./Images/WhatsApp Image 2024-10-12 at 5.05.09 PM (1).jpeg";
import Joseph from "./Images/WhatsApp Image 2024-10-12 at 5.05.08 PM.jpeg";
import Leo from "./Images/leo_the_great__public_domain_.jpg";
import './App.css';

const images = [Mary, Leo, Joseph, Mary];

export default function Body2({ toggleModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to handle fade effect

  const handleDotClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 500); // Timeout matches transition duration
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); // Timeout matches transition duration
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-amber-600">
        <div className="p-5 rounded-lg shadow-md flex flex-col-reverse lg:flex-row justify-center items-center" data-aos="fade-right">
          <div className="max-w-lg text-center lg:text-left lg:mr-5 mt-15" data-aos="fade-left">
            <p className="text-black text-5xl font-bold font-sans mb-3 font-montserrat">Brief History Of</p>
            <span className="text-offWhite text-5xl font-bold mt-10 font-monterrat">The Church</span>
            <p className="text-lg text-7x1 font-monterrat font-bold text-grey-300 mt-4">
            The origin of Saint Leo’s Catholic Church, Ikeja, Lagos State dates back to 1949 when the early worshippers commenced attendance at the Maryland chapel in the compound of Maryland Teacher Training College, where St. Agnes Parish is today located.
            The congregation grew larger and there was a need for a bigger space.  In view of this, in the early sixties, Fr. J. L. Morrison sought and obtained the permission of the Commandant of Police College Ikeja for the use of the Southern Police College, Ikeja for Sunday Masses.
            However, other churches and associations were also permitted to use the same hall.  On many occasions Catholics had to celebrate Mass in the open field.  The congregation therefore embarked on locating a suitable land at Ikeja for their own use.  In the meantime, the worshippers relocated temporarily to Maryland in 1962.  The Western Nigeria Housing Corporation offered a piece of land adjacent to the present location of Bishop Vining Anglican Church, GRA, Ikeja...................
              <button
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black w-15 sm:w-24 md:w-28 lg:w-32 h-10 bg-offWhite mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition duration-300 ease-in-out hover:bg-amber-900 hover:text-white"
                onClick={toggleModal}
              >
                More
              </button>
            </p>
          </div>

          <div className="relative w-full lg:w-[25%] text-center lg:ml-5 mb-5 lg:mb-0" data-aos="fade-up">
            <div className="overflow-hidden relative">
              <img
                alt="church"
                src={images[currentIndex]}
                className={`relative h-auto w-full transition-opacity duration-3000 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            <div className="flex justify-center mt-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? "bg-amber-900" : "bg-gray-300"}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



