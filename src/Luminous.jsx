
import Joyful from "./Images/Luminous/Luminous 1 - Baptism.png"
import Visitation from "./Images/Luminous/Luminous 2 - Wedding at Cana.png"
import Nativity from "./Images/Luminous/Luminous 4 - Proclamation.png"
import Presentation from "./Images/Luminous/Luminous 4 - Transfiguration.png"
import Finding from "./Images/Luminous/Luminous 5 - Eucharist.png"
import './App.css'

export default function Luminous(){
  return(
    <>
     <div className="text-center">
          <p className="text-black-900 text-1xl font-sm font-sans pt-5 animate-slide-right">
          The Five Luminous Mysteries are traditionally prayed on Thursdays:
          </p>

            <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12">
            {/* Text section */}
            <div className="text-center lg:text-left lg:mr-10" style={{marginTop:"-5%"}}>
           <p className="text-black-900 text-3xl font-bold font-sans pt-10 mb-10 animate-slide-left">
           The Baptism of Christ in the Jordan
             </p>
              <p className="font-bold text-lg text-gray-500 mb-10 animate-slide-left">
              “After Jesus was baptized, he came up from the water and behold,<br/> the heavens were opened [for him],<br/> and he saw the Spirit of God descending<br/> like a dove [and] coming upon him.<br/> And a voice came from the heavens,<br/> saying, 'This is my beloved Son, with<br/> whom I am well pleased.'”<br/> - Matthew 3:16-17
            </p>
            <p className="font-bold text-lg text-gray-500 animate-slide-right"> Fruit of the mystery:<span className="text-black">Openness to the Holy Spirit</span> </p>
            
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
      <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg animate-slide-right"></div>
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
The Wedding Feast at Cana
    </p>
    <p className="font-bold text-lg text-gray-500 mb-10 animate-slide-right">
    “On the third day there was a wedding in Cana in Galilee,<br/> and the mother of Jesus was there. Jesus<br/> and his disciples were also invited to the wedding.<br/> When the wine ran short,<br/> the mother of Jesus said to him, 'They have no wine.'<br/> [And] Jesus said to her, 'Woman,<br/> how does your concern affect me?<br/> My hour has not yet come.' His mother<br/> said to the servers, 'Do whatever he tells you.'” <br/>- John 2:1-5
    </p>
    <p className="font-bold text-lg text-gray-500 animate-slide-left"> Fruit of the mystery: <span className="text-black"> To Jesus through Mary</span></p>
  </div>
         </div>
<div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-12">
            {/* Text section */}
            <div className="text-center lg:text-left lg:mr-10 mt-10">
           <p className="text-black-900 text-3xl font-bold font-sans pt-8 mb-5">
           Jesus' Proclamation of the Coming of the<br/> Kingdom of God
             </p>
              <p className="font-bold text-lg text-gray-500 mb-10">
              “'This is the time of fulfillment. The kingdom of God is at hand.<br/> Repent, and believe in the gospel.'” - Mark 1:15  
            </p>
            <p className="font-bold text-lg text-gray-500"> Fruit of the mystery:<span className="text-black"> Conversion</span> </p>
            
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
The Transfiguration
    </p>
    <p className="font-bold text-lg text-gray-500 mb-10">
    “After six days Jesus took Peter, James, and John his brother,<br/> and led them up a high mountain by themselves.<br/> And he was transfigured before them;<br/> his face shone like the sun<br/> and his clothes became white as light.”<br/> - Matthew 17:1-2
    </p>
    <p className="font-bold text-lg text-gray-500"> Fruit of the mystery: <span className="text-black">  Desire for holiness</span></p>
  </div>
       </div>
<div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12">
            {/* Text section */}
            <div className="text-center lg:text-left lg:mr-10" style={{marginTop:"5%"}}>
           <p className="text-black-900 text-3xl font-bold font-sans pt-10 mb-10">
           The Institution of the Eucharist
             </p>
              <p className="font-bold text-lg text-gray-500 mb-10">
              “While they were eating, Jesus took bread,<br/> said the blessing, broke it, and giving<br/> it to his disciples said, 'Take and eat;<br/> this is my body.'” <br/>- Matthew 26:26  
            </p>
            <p className="font-bold text-lg text-gray-500"> Fruit of the mystery:<span className="text-black">: Adoration</span> </p>
            
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