import Daily from "./Images/beautiful-children-praying-god-inside-church_67778-204.avif";
import Book from "./Images/sacramentary-beauvais-facsimile-edition-01.jpg";
import Monstrance from "./Images/istockphoto-1134996859-612x612.jpg";
import './App.css'

export default function Prayer() {
  return (
    <>
      <div className="bg-offWhite py-10">
        <p className="text-black text-6xl font-bold font-sans mb-6 text-center">Prayers</p>

        {/* Responsive Box Container */}
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {/* Box 1 */}
          
  <div
    className="text-white ml-2  sm:w-[45%] md:w-[45%] lg:w-[30%] h-auto bg-amber-600 rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 transition duration-300 ease-in-out cursor-pointer"
  >
    <img alt="" src={Daily} className="h-[80%] w-[250%] mb-4 object-cover rounded-t-lg" />
    <a href="/daily-prayer">
    <p className="text-center font-bold text-3xl text-white mb-10 mt-auto font-sans">
      Daily Prayer
    </p>
    </a>
  </div>

          {/* Box 2 */}
          <div className="text-white ml-2  sm:w-[45%] md:w-[45%] lg:w-[30%] h-auto bg-amber-600 rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 transition duration-300 ease-in-out cursor-pointer">
            <img alt="" src={Monstrance} className="h-[80%] w-[300%] mb-4 object-cover rounded-t-lg" />
            <p className="text-center font-bold text-3xl text-white mb-10 mt-auto font-sans">Benediction</p>
          </div>

          {/* Box 3 */}
          <div  className="text-white ml-2  sm:w-[45%] md:w-[45%] lg:w-[30%] h-auto bg-amber-600 rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 transition duration-300 ease-in-out cursor-pointer">
            <img alt="" src={Book} className="h-[80%] w-[300%] mb-4 object-cover rounded-t-lg" />
            <p className="text-center font-bold text-3xl text-white mb-10 mt-auto font-sans">Order Of Mass</p>
          </div>
        </div>
      </div>
    </>
  );
}
