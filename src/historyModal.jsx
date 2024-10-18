import { SlClose } from "react-icons/sl";
export default function HistoryModal({ isOpen, toggleModal }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Modal Wrapper */}
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gray-900 bg-opacity-50 z-100"
          onClick={toggleModal}
        ></div>

        {/* Modal Content */}
        <div className="bg-white rounded-lg p-8 max-w-3xl relative z-100">
        <SlClose 
  className="absolute top-2 right-2 text-white bg-amber-800 p-1 rounded-full cursor-pointer" 
  size={30} 
  onClick={toggleModal} 
/>
<p className="text-amber-900 text-3xl font-bold font-sans mb-3">
            History of Saint Leo’s Catholic Church
          </p>
          <div className="max-h-96 overflow-y-auto">
            <p className="text-sm font-bold text-grey-300">
            The origin of Saint Leo’s Catholic Church, Ikeja, Lagos State dates back to 1949 when the early worshippers commenced attendance at the Maryland chapel in the compound of Maryland Teacher Training College, where St. Agnes Parish is today located.
The congregation grew larger and there was a need for a bigger space.  In view of this, in the early sixties, Fr. J. L. Morrison sought and obtained the permission of the Commandant of Police College Ikeja for the use of the Southern Police College, Ikeja for Sunday Masses.
However, other churches and associations were also permitted to use the same hall.  On many occasions Catholics had to celebrate Mass in the open field.  The congregation therefore embarked on locating a suitable land at Ikeja for their own use.  In the meantime, the worshippers relocated temporarily to Maryland in 1962.  The Western Nigeria Housing Corporation offered a piece of land adjacent to the present location of Bishop Vining Anglican Church, GRA, Ikeja.  Rev. Fr. Morrison quietly refused the offer since the space was too small for future expansion.
Fortunately, Rev. Fr. Dennis Joseph Slattery, founder of the famous Saint Finbarr’s College, Akoka, Lagos agreed to put at our disposal a portion of land at Ikeja covering an area of 12.24 acres.  A sum of £9,000.00 (Nine Thousand Pounds) was paid for the land on the 26 June 1968.  The land was sold to Fr. Slattery by the Apena family. On the 24th September 1972 the first Station Council was formed at a meeting held in the office of Fr. J.L. Morrison at No. 1, Oba-Akran Avenue, Ikeja.  The council consisted of thirty-five members, including the Chairman of the Council, Dr. F. Akerele, Secretary, Prince Julius Adelusi-Adeluyi and Assistant Secretary, Chief Ben Olaiya.  At this first meeting the name of the church was decided.  The name “Saint Leo” was chosen by the members of the Council to honour the late Archbishop of Lagos, Dr. Leo Hale-Taylor, whose ambition had been to live quietly at Ikeja after retirement.
In 1973, the first constitution was drafted in line with the Archbishop’s directive that each parish should set up a Parish Pastoral Council with the Parish Priest as Chairman.
The building of the old church hall started on the 23rd March 1974 during the tenure of Rev. Fr. Tim Healy.  His Grace, Archbishop Anthony Olubunmi Okogie laid the 
foundation stone on that day.  He later blessed the church hall on completion on 22nd September 1974.  The Parish has had many outstations, including:
St. Francis, Oregun.
St. Timothy’s, Ojodu. 
St. Benjamin’s, Isheri Olowora.
Our Lady of the Holy Rosary, Ogba. 
Blessed Tansi, Agidingbi. Fr. Hugh Ford, on his arrival as Parish Priest, set up a committee to produce a new revised constitution, which was approved on the 18th May 1980.  In the same year, a new Parish Pastoral Council was formed.  The Chairman was Chief Ben Olaiya and the Secretary was Mr. F. A. Johnson.
In April 1981, Archbishop Anthony Olubunmi Okogie turned the sod of the new church building.  On the 28th April 1984 the foundation of what is now Saint Leo’s Catholic Church was laid by the Archbishop.
Architect (Col.) Tomi Asenuga designed the church building which was built by Messrs G. Cappa and D’Alberto.  The church was dedicated on the 14th November 1993.  The church can comfortably seat six thousand worshippers at a time.  There are a Sanctuary, Chapel of Adoration and an upper level with Committee rooms.
The Revd. Fathers who have worked in Saint Leo’s Parish, Ikeja include the following:
Fr. J. L. Morrison, Fr. Olufemi Burke, Fr. D. Murphy, Fr. W. Ghent, Fr. E. Deeney, Fr. Tim Healy, Fr.  M. O’Kane, Fr. J. Friel, Fr. John Hannon, Fr. F. McGovern, Fr. Hugh Ford, Fr. Joseph Akinlotan, Fr. Christopher Ajala, Fr. W. Cussack, Fr. M. Kavanagh, Fr. Paul Roche, Fr. R.M. Crowley,  Fr. Stan Brindley, Fr. Emmanuel Ugwuoke, Fr. Michael Edem, Fr. Peter Anyanwu and Fr. Luke Nwamuo.
Monsignor (Dr.) J. K. Aniagwu is the current Parish Priest.  During his tenure, the Priests’ House was built and many infrastructural facilities have been upgraded.  The priests who have worked with him since 1995 are Fr. Cletus Nwaogwugwu, Fr. Daniel Melaba, Fr. Ifeanyi Iwu, Fr. Paul Ijasan, Fr. Michael Etegene, Fr. Emmanuel Okogwa, Fr. Innocent Chiamaka, Fr. Peter Maiku, Fr. Gabriel Iheanacho, Fr. Paul Okoli and Fr. Michael Yeboah.
Various congregations of Sisters have also rendered service in the parish, notably the Sisters of the Eucharistic Heart of Jesus (EHJ).  Others are the Sisters of Mercy, Sisters of the Holy Child Jesus (SHCJ), Daughters of St. Paul (fsp.) and Daughters of Charity (DC).
            </p>
          </div>
        </div>
      </div>
    </>
  );
}