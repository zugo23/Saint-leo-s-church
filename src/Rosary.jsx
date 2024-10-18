import Daily from "./Images/rosary2.png"; 
import Joyful from "./Images/Joyful 1 - The Annunciation.png"
import Visitation from "./Images/Joyful 2 - The Visitation.png"
import Nativity from "./Images/Joyful 3 - The Nativity.png"
import Presentation from "./Images/Joyful 4 - The Presentation.png"
import Finding from "./Images/Joyful 5 - The Finding in the Temple.png"
import Sorrowful from "./Sorroful"
import Glorious from "./Glorious"
import Luminous from "./Luminous"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'


const mysteries = ['Joyful', 'Sorrowful', 'Luminous', 'Glorious'];

export default function Body2() {
  const [currentMystery, setCurrentMystery] = useState(0); // 0 represents Joyful

  const handleNext = () => {
    setCurrentMystery((prev) => (prev + 1) % mysteries.length); // Cycle to next mystery
  };

  const handlePrev = () => {
    setCurrentMystery((prev) => (prev - 1 + mysteries.length) % mysteries.length); // Cycle to previous mystery
  };

  useEffect(() => {
    AOS.init({  
      once: true,      // Whether animation should happen only once
    });
  }, []);
  return (
    <>
    <div  className="bg-gray-300">
    <div className="flex justify-center items-center min-h-screen">
     <div className="bg-white pt-16 w-[95%] h-auto border border-gray-400">
        <div className="text-center"   data-aos="fade-in">
          <p className="text-amber-900 text-5xl font-bold font-sans pt-10 animate-slide-left">
            Praying the Rosary
          </p>
          <p className="text-black-900 text-3xl font-md font-sans pt-5 animate-slide-right">
            Familiarize yourself and/or your group with the prayers of the rosary.
          </p>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12 ">
  {/* Text section */}
  <div className="text-center lg:text-left lg:mr-10 animate-leftt-to-center animate-slide-left" style={{ marginTop: "2%" }}>
    <p className="font-bold text-gray-500 text-base md:text-lg lg:text-xl">
      1. <span>Make the Sign of the Cross.</span>
    </p>
    <p className="font-bold text-gray-500 text-base md:text-lg lg:text-xl">
      2. <span>Holding the Crucifix, say the Apostles' Creed.</span>
    </p>
    <p className="font-bold text-gray-500 text-base md:text-lg lg:text-xl">
      3. <span>On the first bead, say an Our Father.</span>
    </p>
    <p className="font-bold text-gray-500 text-base md:text-lg lg:text-xl">
      4. <span>Say one Hail Mary on each of the next three beads.</span>
    </p>
    <p className="font-bold text-gray-500 text-base md:text-lg lg:text-xl">
      5. <span>Say the Glory Be</span>
    </p>
    <p className="font-bold text-gray-500 text-base md:text-lg lg:text-xl">
      6. <span>For each of the five decades, announce the Mystery (perhaps<br /> followed by a brief reading from Scripture) then say the Our Father.</span>
    </p>
    <p className="font-bold text-gray-500 text-base md:text-lg lg:text-xl">
      7. <span>While fingering each of the ten beads of the decade, next say<br /> ten Hail Marys while meditating on the Mystery. Then say a<br /> Glory Be.<br />
        (After finishing each decade, some say the following prayer<br /> requested by the Blessed Virgin Mary at Fatima: O my Jesus,<br /> forgive us our sins, save us from the fires of hell; lead all souls<br /> to Heaven, especially those who have most need of your<br /> mercy.)</span>
    </p>
    <p className="font-bold text-gray-500 text-base md:text-lg lg:text-xl">
      8. <span>After saying the five decades, say the Hail, Holy Queen,<br /> followed by this dialogue and prayer:<br />
        V. Pray for us, O holy Mother of God.<br />
        R. That we may be made worthy of the promises of Christ.</span>
    </p>
  </div>

  {/* Image section */}
  <div className="lg:w-auto mt-8 lg:mt-0 font-sans">
    <div className="relative">
      {/* Gray background for shadow effect */}
      <div className="absolute inset-0 bg-gray-200 opacity-50 rounded-lg shadow-md animate-slide-left"></div>
      <img
        alt=""
        src={Daily}
        className="relative h-auto w-full object-cover rounded-lg shadow-lg animate-slide-left"
      />
    </div>
  </div>
</div>
<p className="font-bold text-gray-700 text-sm md:text-base lg:text-lg mt-10 font-sans animate-slide-right">
  Let us pray: O God, whose Only Begotten Son, by his life, Death, and Resurrection, has purchased for us<br /> the rewards of eternal life, grant, we beseech thee, that while meditating on these mysteries of the most<br /> holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise,<br /> through the same Christ our Lord. Amen.<br />
  (A prayer to St. Joseph may also follow.)<br /> Conclude the Rosary with the Sign of the Cross.
</p>
            <hr style={{border: "none", height: "1px", backgroundColor: "gray", marginTop:"20px"}}  />
            {/*Joy*/}
            <div className="flex justify-between items-center">
            <button 
                  onClick={handlePrev} 
                  className="bg-amber-900 text-white p-2 rounded  animate-slide-left"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-white" />
                </button>
              <p className="text-amber-900 text-3xl font-bold font-sans pt-10 animate-slide-left">
                {mysteries[currentMystery]} Mysteries
              </p>
              <button 
              onClick={handleNext}
              className="bg-amber-900 text-white p-2 rounded animate-slide-right"
              >
                <ChevronRightIcon className="h-6 w-6 text-whiteight" />
              </button>
            </div>
            {currentMystery === 0 && (
              <div>
          <p className="text-black-900 text-1xl font-sm font-sans pt-5 font-sans animate-slide-right">
           The Five Joyful Mysteries are traditionally prayed on Mondays, Saturdays, and, during the season of Advent,<br/> on Sundays:
          </p>

            <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12 font-sans">
            {/* Text section */}
            <div className="text-center lg:text-left lg:mr-10 animate-slide-left" style={{marginTop:"-5%"}}>
           <p className="text-black-900 text-3xl font-bold font-sans pt-10 mb-10">
           The Annunciation
             </p>
              <p className="font-bold text-lg text-gray-500 mb-10">
            “In the sixth month, the angel Gabriel was sent<br/> from God to a town of Galilee called Nazareth, to a <br/>virgin betrothed to a man named Joseph, of the<br/> house of David, and the virgin’s name was Mary.” -<br/> Luke 1:26-27<br/>
            </p>
            <p className="font-bold text-lg text-gray-500"> Fruit of the mystery:<span className="text-black">Humility</span> </p>
            
            </div>

            {/* Image section */}
            <div className="lg:w-auto mt-8 lg:mt-0">
              <div className="relative">
                {/* Gray background for shadow effect */}
                <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg animate-slide-left"></div>
                <img
                  alt=""
                  src={Joyful}
                  className="relative h-auto w-full object-cover rounded-lg shadow-lg opacity-80  animate-slide-right"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12 font-sans">
  {/* Image section */}
  <div className="lg:w-auto mt-8 lg:mt-0 order-2 lg:order-1">
    <div className="relative">
      {/* Gray background for shadow effect */}
      <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg animate-slide-right "></div>
      <img
        alt=""
        src={Visitation}
        className="relative h-auto w-full object-cover rounded-lg shadow-lg opacity-60 animate-slide-left"
      />
    </div>
  </div>
  
  {/* Text section */}
  <div className="text-center lg:text-right lg:ml-10 order-1 lg:order-2 animate-slide-right" style={{ marginTop: "-2%" }}>
    <p className="text-black-900 text-3xl font-bold font-sans pt-10 mb-10 animate-slide-right">
      The Visitation
    </p>
    <p className="font-bold text-lg text-gray-500 mb-10 animate-slide-right">
      During those days Mary set out and traveled to<br /> the hill country in haste to a town of Judah, where <br /> she entered the house of Zechariah and greeted<br /> Elizabeth. When Elizabeth heard Mary’s greeting,<br /> the infant leaped in her womb, and Elizabeth, filled<br /> with the holy Spirit, cried out in a loud voice and<br /> said, 'Most blessed are you among women, and<br /> blessed is the fruit of your womb.'” - Luke 1:39-42<br />
    </p>
    <p className="font-bold text-lg text-gray-500 animate-slide-right"> Fruit of the mystery: <span className="text-black">Love of Neighbor</span></p>
  </div>
         </div>
<div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-12 font-sans">
            {/* Text section */}
            <div className="text-center lg:text-left lg:mr-10 mt-10 animate-slide-left">
           <p className="text-black-900 text-3xl font-bold font-sans pt-8 mb-5">
           The Nativity
             </p>
              <p className="font-bold text-lg text-gray-500 mb-10">
              “In those days a decree went out from Caesar<br/> Augustus that the whole world should be enrolled.<br/> This was the first enrollment, when Quirinius was<br/> governor of Syria. So all went to be enrolled, each<br/> to his own town. And Joseph too went up from Galilee from<br/> the town of Nazareth to Judea, to the<br/> city of David that is called Bethlehem, because he<br/> was of the house and family of David, to be<br/> enrolled with Mary, his betrothed, who was with<br/> child. While they were there, the time came for her<br/> to have her child, and she gave birth to her<br/> firstborn son. She wrapped him in swaddling<br/>
              clothes and laid him in a manger, because there<br/> was no room for them in the inn.” - Luke 2:1-7 
            </p>
            <p className="font-bold text-lg text-gray-500"> Fruit of the mystery:<span className="text-black">Humility</span> </p>
            
            </div>

            {/* Image section */}
            <div className="lg:w-auto mt-2 lg:mt-0">
              <div className="relative">
                {/* Gray background for shadow effect */}
                <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg animate-slide-left"></div>
                <img
                  alt=""
                  src={Nativity}
                  className="relative h-auto w-full object-cover rounded-lg shadow-lg opacity-80 animate-slide-right"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12 font-sans animate">
  {/* Image section */}
  <div className="lg:w-auto mt-8 lg:mt-0 order-2 lg:order-1">
    <div className="relative">
      {/* Gray background for shadow effect */}
      <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg animate-slide-right"></div>
      <img
        alt=""
        src={Presentation}
        className="relative h-auto w-full object-cover rounded-lg shadow-lg opacity-60 animate-slide-left"
      />
    </div>
  </div>
  
  {/* Text section */}
  <div className="text-center lg:text-right lg:ml-10 order-1 lg:order-2 animate-slide-right" style={{ marginTop: "-2%" }}>
    <p className="text-black-900 text-3xl font-bold font-sans pt-10 mb-10">
    The Presentation in the Temple
    </p>
    <p className="font-bold text-lg text-gray-500 mb-10">
    When eight days were completed for his<br/> circumcision, he was named Jesus, the name<br/> given him by the angel before he was<br/> conceived in the womb.<br/>

"When the days were completed for their<br/> purification according to the law of Moses, they<br/> took him up to Jerusalem to present him to the<br/> Lord, just as it is written in the law of the Lord,<br/> 'Every male that opens the womb shall be consecrated<br/> to the Lord,' and to offer the sacrifice of<br/> 'a pair of turtledoves or two young pigeons,'<br/> in accordance with the dictate in the law of the Lord.”<br/> - Luke 2:21-24
    </p>
    <p className="font-bold text-lg text-gray-500"> Fruit of the mystery: <span className="text-black"> Poverty</span></p>
  </div>
       </div>
<div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12 font-sans animate-slid">
            {/* Text section */}
            <div className="text-center lg:text-left lg:mr-10" style={{marginTop:"-5%"}}>
           <p className="text-black-900 text-3xl font-bold font-sans pt-10 mb-10">
           The Finding in the Temple
             </p>
              <p className="font-bold text-lg text-gray-500 mb-10">
              “Each year his parents went to Jerusalem for the<br/> feast of Passover,  and when he was twelve years old,<br/> they went up according to festival custom.<br/> After they had completed its days, as they were<br/> returning, the boy Jesus remained behind in Jerusalem,<br/> but his parents did not know it.Thinking <br/> that he was in the caravan,<br/> they journeyed for a day and looked for him among <br/>their relatives and acquaintances,<br/> but not finding him, they returned to Jerusalem to look<br/>  for him. After three days they found him in the temple,<br/>  sitting in the midst of the teachers,<br/> listening to them and asking them questions,<br/> and all who heard him were astounded at his understanding<br/>  and his answers.”<br/> - Luke 2:41-47  
            </p>
            <p className="font-bold text-lg text-gray-500"> Fruit of the mystery:<span className="text-black">Purity of Heart and Body</span> </p>
            
            </div>

            {/* Image section */}
            <div className="lg:w-auto mt-8 lg:mt-0">
              <div className="relative">
                {/* Gray background for shadow effect */}
                <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg animate-slide-right"></div>
                <img
                  alt=""
                  src={Finding}
                  className="relative h-auto w-full object-cover rounded-lg shadow-lg opacity-80 animate-slide-left"
                />
              </div>
            </div>
          </div>
          </div>
             )}
        </div>
        {currentMystery === 1 && <Sorrowful />} {/* Sorrowful Mystery Component */}
       
            {currentMystery === 2 && <Luminous />} 
            {currentMystery === 3 && <Glorious />} 
          </div>
      </div>
      </div>
    </>
  );
}