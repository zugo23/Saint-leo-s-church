import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import img from "../Images/WhatsApp Image 2024-10-12 at 5.05.06 PM (1).jpeg";
import "../App.css";

const prayers = ['Litany Of The Blessed Virgin Mary', 'Divine Mercy Prayer', 'Angelus'];
const textArray = ['Daily Prayers', 'Litany Of The Blessed Virgin Mary', 'Angelus', 'Divine Mercy Prayer'];
const images = [
  img,
  img,
  img,
  img
];

export default function Litany() {
  const [currentPrayers, setCurrentPrayers] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
    
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);


  const handleNext = () => {
    setCurrentPrayers((prev) => (prev + 1) % prayers.length); // Cycle to next mystery
  };

  const handlePrev = () => {
    setCurrentPrayers((prev) => (prev - 1 + prayers.length) % prayers.length); // Cycle to previous mystery
  };

  return (
    <div className="bg-offWhite">
        <div className="bg-offWhite pt-[63px]">
      <div className="relative w-full h-[200px] mr-[35px] ">
        <img
          alt="Your Company"
          src={images[currentIndex]} 
          className="h-full w-full transform animate-zoomBlur"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
        <p className="text-white text-3xl font-bold text-center font-sans sm:text-4xl md:text-3xl lg:text-5xl animate-slideUp">
          {textArray[currentIndex]}
        </p>
      </div>
      </div>
    </div>
      {/* Title of the Prayer */}
      <div className="flex justify-between items-center">
        <button onClick={handlePrev} className="bg-amber-900 text-white p-2 rounded">
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        <p className="text-center text-3xl font-bold text-black mb-6 mt-10">
          {prayers[currentPrayers]}
        </p>
        <button onClick={handleNext} className="bg-amber-900 text-white p-2 rounded">
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>
      {currentPrayers === 0 && (
         <>
         <div>
  <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12">
    {/* Left Side */}
    <div className="lg:w-1/2 text-center lg:text-right pr-4 border-r-2 border-gray-300">
      <p className="text-lg text-black mb-2">Lord, have mercy on us.</p>
      <p className="text-lg text-black mb-2">Christ, have mercy on us.</p>
      <p className="text-lg text-black mb-2">Lord, have mercy on us. Christ, hear us.</p>
      <p className="text-lg text-black mb-2">Christ, graciously hear us.</p>
      <p className="text-lg text-black mb-2">God the Father of Heaven,</p>
      <p className="text-lg text-black mb-2">Have mercy on us.</p>
      <p className="text-lg text-black mb-2">God the Son, Redeemer of the world,</p>
      <p className="text-lg text-black mb-2">Have mercy on us.</p>
      <p className="text-lg text-black mb-2">God the Holy Ghost,</p>
      <p className="text-lg text-black mb-2">Have mercy on us.</p>
      <p className="text-lg text-black mb-2">Holy Trinity, one God,</p>
      <p className="text-lg text-black mb-2">Have mercy on us.</p>
      <p className="text-lg text-black mb-2">Holy Mary,</p>
      <p className="text-lg text-black mb-2 font-bold">Pray for us.</p>
      <p className="text-lg text-black mb-2">Holy Mother of God,</p>
      <p className="text-lg text-black mb-2">Holy Virgin of virgins,</p>
      <p className="text-lg text-black mb-2">Mother of Christ,</p>
      <p className="text-lg text-black mb-2">Mother of divine grace,</p>
      <p className="text-lg text-black mb-2">Mother most pure,</p>
      <p className="text-lg text-black mb-2">Mother most chaste,</p>
      <p className="text-lg text-black mb-2">Mother inviolate,</p>
      <p className="text-lg text-black mb-2">Mother undefiled,</p>
      <p className="text-lg text-black mb-2">Mother most amiable,</p>
      <p className="text-lg text-black mb-2">Mother most admirable,</p>
      <p className="text-lg text-black mb-2">Mother of good counsel,</p>
      <p className="text-lg text-black mb-2">Mother of our Creator,</p>
      <p className="text-lg text-black mb-2">Mother of our Savior,</p>
      <p className="text-lg text-black mb-2">Virgin most prudent,</p>
      <p className="text-lg text-black mb-2">Virgin most venerable,</p>
      <p className="text-lg text-black mb-2">Virgin most renowned,</p>
    <p className="text-lg text-black mb-2">Virgin most powerful,</p>
    </div>

    {/* Right Side */}
    <div className="lg:w-1/2 text-center lg:text-left pl-4">
    <p className="text-lg text-black mb-2">Virgin most merciful,</p>
    <p className="text-lg text-black mb-2 font-bold">Pray for us.</p>
    <p className="text-lg text-black mb-2">Virgin most faithful,</p>
    <p className="text-lg text-black mb-2">Mirror of justice,</p>
    <p className="text-lg text-black mb-2">Cause of our joy,</p>
    <p className="text-lg text-black mb-2">Spiritual vessel,</p>
    <p className="text-lg text-black mb-2">Vessel of honor,</p>
    <p className="text-lg text-black mb-2">Singular vessel of devotion,</p>
    <p className="text-lg text-black mb-2">Mystical rose,</p>
    <p className="text-lg text-black mb-2">Tower of David,</p>
    <p className="text-lg text-black mb-2">Tower of ivory,</p>
    <p className="text-lg text-black mb-2">House of gold,</p>
    <p className="text-lg text-black mb-2">Ark of the Covenant,</p>
    <p className="text-lg text-black mb-2">Gate of Heaven,</p>
    <p className="text-lg text-black mb-2">Morning star,</p>
    <p className="text-lg text-black mb-2">Health of the sick,</p>
    <p className="text-lg text-black mb-2">Refuge of sinners,</p>
    <p className="text-lg text-black mb-2">Comforter of the afflicted,</p>
    <p className="text-lg text-black mb-2">Help of Christians,</p>
    <p className="text-lg text-black mb-2">Queen of angels,</p>
    <p className="text-lg text-black mb-2">Queen of patriarchs,</p>
    <p className="text-lg text-black mb-2">Queen of prophets,</p>
    <p className="text-lg text-black mb-2">Queen of apostles,</p>
    <p className="text-lg text-black mb-2">Queen of martyrs,</p>
    <p className="text-lg text-black mb-2">Queen of confessors,</p>
    <p className="text-lg text-black mb-2">Queen of virgins,</p>
    <p className="text-lg text-black mb-2">Queen of all saints,</p>
    <p className="text-lg text-black mb-2">Queen conceived without Original Sin,</p>
    <p className="text-lg text-black mb-2">Queen assumed into Heaven,</p>
    <p className="text-lg text-black mb-2">Queen of the most holy Rosary,</p>
    <p className="text-lg text-black mb-2">Queen of peace,</p>
    </div>
  </div>
 <div className='text-center'>
<p className="text-lg text-black font-bold mb-2">Lamb of God, who takes away the sins of the world,</p>
<p className="text-lg text-black mb-2 font-bold">Spare us, O Lord.</p>
<p className="text-lg text-black mb-2 font-bold">Lamb of God, who takes away the sins of the world,</p>
<p className="text-lg text-black mb-2 font-bold">Graciously hear us, O Lord.</p>
<p className="text-lg text-black mb-2 font-bold">Lamb of God, who takes away the sins of the world,</p>
<p className="text-lg text-black mb-2 font-bold">Have mercy on us.</p>
</div>
</div>
</>
)}

    </div>
  );
}



