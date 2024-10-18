
import Joyful from "./Images/Sorrowful/Sorrowful 1 - Agony in the Garden.png"
import Visitation from "./Images/Sorrowful/Sorrowful 2 - Scourging at the Pillar.png"
import Nativity from "./Images/Sorrowful/Sorrowful 3 - Crowning with Thorns.png"
import Presentation from "./Images/Sorrowful/Sorrowful 4 - Carrying the Cross.png"
import Finding from "./Images/Sorrowful/Sorrowful 5 - Cruxifiction.png"
import './App.css'

export default function Sorrowful(){
  return(
    <>
     <div className="text-center">
          <p className="text-black-900 text-1xl font-sm font-sans pt-5 animate-slide-right">
          The Five Sorrowful Mysteries are traditionally prayed on Tuesdays, Fridays, and, during the season of,<br/>Lent, on Sundays:
          </p>

            <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12">
            {/* Text section */}
            <div className="text-center lg:text-left lg:mr-10" style={{marginTop:"-5%"}}>
           <p className="text-black-900 text-3xl font-bold font-sans pt-10 mb-10 animate-slide-left">
           The Agony in the Garden
             </p>
              <p className="font-bold text-lg text-gray-500 mb-10 animate-slide-left">
              “Then Jesus came with them to a place called<br/> Gethsemane, and he said to his disciples, 'Sit here<br/> while I go over there and pray.' He took along Peter<br/> and the two sons of Zebedee, and began to feel<br/> sorrow and distress. Then he said to them, 'My<br/> soul is sorrowful even to death. Remain here and<br/> keep watch with me.' He advanced a little and fell<br/> prostrate in prayer, saying, 'My Father, if it is<br/> possible, let this cup pass from me; yet, not as I will,<br/> but as you will.'” - Matthew 26:36-39
            </p>
            <p className="font-bold text-lg text-gray-500  animate-slide-right"> Fruit of the mystery:<span className="text-black">Obedience to God’s Will</span> </p>
            
            </div>

            {/* Image section */}
            <div className="lg:w-auto mt-8 lg:mt-0">
              <div className="relative">
                {/* Gray background for shadow effect */}
                <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg  animate-slide-left"></div>
                <img
                  alt=""
                  src={Joyful}
                  className="relative h-auto w-full object-cover rounded-lg shadow-lg opacity-80  animate-slide-right"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12">
  {/* Image section */}
  <div className="lg:w-auto mt-8 lg:mt-0 order-2 lg:order-1">
    <div className="relative">
      {/* Gray background for shadow effect */}
      <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg  animate-slide-right"></div>
      <img
        alt=""
        src={Visitation}
        className="relative h-auto w-full object-cover rounded-lg shadow-lg opacity-60  animate-slide-left"
      />
    </div>
  </div>
  
  {/* Text section */}
  <div className="text-center lg:text-right lg:ml-10 order-1 lg:order-2" style={{ marginTop: "-2%" }}>
    <p className="text-black-900 text-3xl font-bold font-sans pt-10 mb-10  animate-slide-right">
The Scourging at the Pillar
    </p>
    <p className="font-bold text-lg text-gray-500 mb-10  animate-slide-right">
    “Then he released Barabbas to them, but after he had Jesus <br/>scourged, he handed him over to be crucified.”<br/> - Matthew 27:26
    </p>
    <p className="font-bold text-lg text-gray-500  animate-slide-left"> Fruit of the mystery: <span className="text-black">Mortification</span></p>
  </div>
         </div>
<div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-12">
            {/* Text section */}
            <div className="text-center lg:text-left lg:mr-10 mt-10">
           <p className="text-black-900 text-3xl font-bold font-sans pt-8 mb-5  animate-slide-left">
           The Crowning with Thorns
             </p>
              <p className="font-bold text-lg text-gray-500 mb-10  animate-slide-left">
              “Then the soldiers of the governor took Jesus<br/> inside the praetorium and gathered the whole<br/> cohort around him. They stripped off his clothes<br/> and threw a scarlet military cloak about him.<br/> Weaving a crown out of thorns, they placed it on<br/> his head, and a reed in his right hand. And kneeling<br/> before him, they mocked him, saying, 'Hail,<br/> King of the Jews!'” - Matthew 27:27-29
            </p>
            <p className="font-bold text-lg text-gray-500  animate-slide-right"> Fruit of the mystery:<span className="text-black"> Courage</span> </p>
            
            </div>

            {/* Image section */}
            <div className="lg:w-auto mt-2 lg:mt-0">
              <div className="relative">
                {/* Gray background for shadow effect */}
                <div className="absolute inset-3 bg-gray-800 opacity-80 rounded-lg shadow-lg  animate-slide-left"></div>
                <img
                  alt=""
                  src={Nativity}
                  className="relative h-auto w-full object-cover rounded-lg shadow-lg opacity-80  animate-slide-right"
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
The Carrying of the Cross
    </p>
    <p className="font-bold text-lg text-gray-500 mb-10">
   “They pressed into service a passer-by, Simon, a <br/>Cyrenian, who was coming in from the country, the<br/> father of Alexander and Rufus, to carry his cross.<br/> They brought him to the place of Golgotha<br/> (which is translated Place of the Skull).”<br/> - Mark 15:21-22  
    </p>
    <p className="font-bold text-lg text-gray-500"> Fruit of the mystery: <span className="text-black"> Poverty</span></p>
  </div>
       </div>
<div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-12">
            {/* Text section */}
            <div className="text-center lg:text-left lg:mr-10" style={{marginTop:"-5%"}}>
           <p className="text-black-900 text-3xl font-bold font-sans pt-40 mb-10">
           The Crucifixion and Death
             </p>
              <p className="font-bold text-lg text-gray-500 mb-10 ">
              “When they came to the place called the Skull, they crucified him and the <br/>criminals there, one on his right, the other on his left. <br/>[Then Jesus said, 'Father, forgive them, they know not what<br/> they do.'] They divided his garments by casting lots.<br/> The people stood by and watched; the rulers,<br/> meanwhile, sneered at him and said, 'He saved others,<br/> let him save himself if he is the chosen one, the <br/>Messiah of God.' Even the soldiers jeered at him.<br/> As they approached to offer him wine they called out,<br/> 'If you are King of the Jews, save yourself.' Above <br/> him there was an inscription that read,<br/> 'This is the King of the Jews.' Now one of<br/> the criminals hanging there reviled Jesus, saying, 'Are you<br/> not the Messiah? Save yourself and us.'<br/> The other, however, rebuking him, said in reply, 'Have you<br/> no fear of God, for you are subject to the same condemnation?<br/> And indeed, we have been condemned justly,<br/> for the sentence we received corresponds to our<br/> crimes, but this man has done nothing criminal.'<br/> Then he said, 'Jesus, remember me when you<br/> come into your kingdom.' He replied to him, <br/>'Amen, I say to you, today you will be with me in Paradise.'<br/>

"It was now about noon and darkness came over the whole<br/> land until three in the afternoon because<br/> of an eclipse of the sun. Then the veil of<br/> the temple was torn down the middle.<br/> Jesus cried out in a loud voice, 'Father,<br/> into your hands I commend my spirit';<br/> and when he had said this he breathed his last.”<br/> - Luke 23:33-46  


            </p>
            <p className="font-bold text-lg text-gray-500"> Fruit of the mystery:<span className="text-black">Sorrow for our Sins</span> </p>
            
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