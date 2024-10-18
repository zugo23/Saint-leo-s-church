import Daily from "./Images/beautiful-children-praying-god-inside-church_67778-204.avif";
import './App.css'

export default function Prayer() {

  return (
    <>
      <div className="bg-amber-600 py-10">
        <p className="text-offWhite text-6xl font-bold font-sans mb-6 text-center">Pastoral Team</p>

        {/* Responsive Box Container */}
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {/* Box 1 */}
          <div
  className="text-white ml-2 h-[30%]  sm:w-[45%] md:w-[45%] lg:w-[20%] bg-offWhite rounded-lg"
>
            <img alt="" src={Daily} className="h-[90%] w-[300%] mb-4 object-cover" />
            <p className="text-center font-bold text-2xl text-black mt-auto font-sans">
               Iwu .P. Chukwuezugo
              </p>
            <p className="text-center font-bold text-3xl text-amber-600 mt-auto font-sans">
  Priest In Residence
</p>
          </div>

          {/* Box 2 */}
          <div
  className="text-white ml-2 h-[30%]  sm:w-[45%] md:w-[45%] lg:w-[20%] bg-offWhite rounded-lg"
>
            <img alt="" src={Daily} className="h-[90%] w-[300%] mb-4 object-cover" />
            <p className="text-center font-bold text-2xl text-black mt-auto font-sans">
               Msgr John .K. Aniagwu
              </p>
            <p className="text-center font-bold text-3xl text-amber-600 mt-auto font-sans">
  Parish Priest
</p>
          </div>

          <div
  className="text-white ml-2 h-[30%]  sm:w-[45%] md:w-[45%] lg:w-[20%] bg-offWhite rounded-lg"
>
            <img alt="" src={Daily} className="h-[90%] w-[300%] mb-4 object-cover" />
            <p className="text-center font-bold text-2xl text-black mt-auto font-sans">
               Fr Emmanuel Omoroke
              </p>
            <p className="text-center font-bold text-3xl text-amber-600 mt-auto font-sans">
  Asst Parish Priest
</p>
          </div>

          <div
  className="text-white ml-2  h-[30%]  sm:w-[45%] md:w-[45%] lg:w-[20%] bg-offWhite rounded-lg"
>
            <img alt="" src={Daily} className="h-[90%] w-[300%] mb-4 object-cover" />
            <p className="text-center font-bold text-2xl text-black mt-auto font-sans">
               Fr Harrison Okoli
              </p>
            <p className="text-center font-bold text-3xl text-amber-600 mt-auto font-sans">
  Priest In Residence
</p>
          </div>
        </div>
      </div>
    </>
  );
}
