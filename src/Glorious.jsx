
import Joyful from "./Images/Glorious/Glorious 1 - Resurrection.png"
import Visitation from "./Images/Glorious/Glorious 2 - Ascension.png"
import Nativity from "./Images/Glorious/Glorious 3 - Descent of the Holy Spirit.png"
import Presentation from "./Images/Glorious/Glorious 4 - Assumption.png"
import Finding from "./Images/Glorious/Glorious 5 - Coronation of Mary.png"
import './App.css'

export default function Glorious(){
  return(
    <>
     <div className="text-center">
          <p className="text-black-900 text-1xl font-md font-sans pt-5 animate-slide-right">
          The Five Glorious Mysteries are traditionally prayed on Wednesdays and, outside the seasons of<br/> Advent and Lent, on Sundays::
          </p>

            <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12">
            {/* Text section */}
            <div className="text-center lg:text-left lg:mr-10" style={{marginTop:"-5%"}}>
           <p className="text-black-900 text-3xl font-bold font-sans pt-10 mb-10 animate-slide-left">
           The Resurrection
             </p>
              <p className="font-bold text-lg text-gray-500 mb-10 animate-slide-left">
              “But at daybreak on the first day of the week they<br/> took the spices they had prepared and went to the<br/> tomb.They found the stone rolled away from the <br/>tomb; but when they entered, they did not find <br/>the body of the Lord Jesus. While they were puzzling<br/> over this, behold, two men in dazzling garments<br/> appeared to them. They were terrified and bowed<br/> their faces to the ground. They said to them, 'Why<br/> do you seek the living one among the dead?<br/> He is not here, but he has been raised.'”<br/> - Luke 24:1-5
            </p>
            <p className="font-bold text-lg text-gray-500 animate-slide-right"> Fruit of the mystery:<span className="text-black">Faith</span> </p>
            
            </div>

            {/* Image section */}
            <div className="lg:w-auto mt-8 lg:mt-0">
              <div className="relative">
                {/* Gray background for shadow effect */}
                <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg animate-slide-left"></div>
                <img
                  alt=""
                  src={Joyful}
                  className="relative h-auto w-full object-cover rounded-lg shadow-lg opacity-80 animate-slide-right"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12">
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
  <div className="text-center lg:text-right lg:ml-10 order-1 lg:order-2" style={{ marginTop: "-2%" }}>
    <p className="text-black-900 text-3xl font-bold font-sans pt-10 mb-10 animate-slide-right">
The Ascension
    </p>
    <p className="font-bold text-lg text-gray-500 mb-10 animate-slide-right">
      During those days Mary set out and traveled to<br /> the hill country in haste to a town of Judah, where <br /> she entered the house of Zechariah and greeted<br /> Elizabeth. When Elizabeth heard Mary’s greeting,<br /> the infant leaped in her womb, and Elizabeth, filled<br /> with the holy Spirit, cried out in a loud voice and<br /> said, 'Most blessed are you among women, and<br /> blessed is the fruit of your womb.'” - Luke 1:39-42<br />
    </p>
    <p className="font-bold text-lg text-gray-500 animate-slide-left"> Fruit of the mystery: <span className="text-black"> Hope</span></p>
  </div>
         </div>
<div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-12">
            {/* Text section */}
            <div className="text-center lg:text-left lg:mr-10 mt-10">
           <p className="text-black-900 text-3xl font-bold font-sans pt-8 mb-5">
           The Descent of the Holy Spirit
             </p>
              <p className="font-bold text-lg text-gray-500 mb-10">
              “When the time for Pentecost was fulfilled,<br/> they were all in one place together. And<br/> suddenly there came from the sky<br/> a noise like a strong driving wind, and <br/>it filled the entire house in which they were.<br/> Then there appeared to them tongues as of fire,<br/> which parted and came to rest on each one of them.<br/> And they were all filled with the holy Spirit<br/> and began to speak in different tongues, as<br/> the Spirit enabled them to proclaim.”<br/> - Acts 2:1-4
            </p>
            <p className="font-bold text-lg text-gray-500"> Fruit of the mystery:<span className="text-black">Wisdom</span> </p>
            
            </div>

            {/* Image section */}
            <div className="lg:w-auto mt-2 lg:mt-0">
              <div className="relative">
                {/* Gray background for shadow effect */}
                <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg"></div>
                <img
                  alt=""
                  src={Nativity}
                  className="relative h-auto w-full object-cover rounded-lg shadow-lg opacity-80"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12">
  {/* Image section */}
  <div className="lg:w-auto mt-8 lg:mt-0 order-2 lg:order-1">
    <div className="relative">
      {/* Gray background for shadow effect */}
      <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg"></div>
      <img
        alt=""
        src={Presentation}
        className="relative h-auto w-full object-cover rounded-lg shadow-lg opacity-60"
      />
    </div>
  </div>
  
  {/* Text section */}
  <div className="text-center lg:text-right lg:ml-10 order-1 lg:order-2" style={{ marginTop: "-2%" }}>
    <p className="text-black-900 text-3xl font-bold font-sans pt-10 mb-10">
The Assumption
    </p>
    <p className="font-bold text-lg text-gray-500 mb-10">
    Behold, from now on will all ages call me blessed.<br/> The Mighty One has done great things for me,<br/> and holy is his name.”<br/> - Luke 1:48-49
    </p>
    <p className="font-bold text-lg text-gray-500"> Fruit of the mystery: <span className="text-black">Devotion to Mary</span></p>
  </div>
       </div>
<div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12">
            {/* Text section */}
            <div className="text-center lg:text-left lg:mr-10" style={{marginTop:"-5%"}}>
           <p className="text-black-900 text-3xl font-bold font-sans pt-10 mb-10">
           The Coronation of Mary
             </p>
              <p className="font-bold text-lg text-gray-500 mb-10">
              “A great sign appeared in the sky,<br/> a woman clothed with the sun, with the<br/> moon under her feet, and on her head a crown<br/> of twelve stars.”<br/> - Revelation 12:1
            </p>
            <p className="font-bold text-lg text-gray-500"> Fruit of the mystery:<span className="text-black">Grace of a happy death</span> </p>
            
            </div>

            {/* Image section */}
            <div className="lg:w-auto mt-8 lg:mt-0">
              <div className="relative">
                {/* Gray background for shadow effect */}
                <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg"></div>
                <img
                  alt=""
                  src={Finding}
                  className="relative h-auto w-full object-cover rounded-lg shadow-lg opacity-80"
                />
              </div>
            </div>
          </div>
          </div>
    </>
  )
}