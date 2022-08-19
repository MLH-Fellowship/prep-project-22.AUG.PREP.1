import React from "react";
import { Link } from "react-router-dom";
import { IoGlobeOutline, IoBusiness, IoCarSharp, IoMusicalNotesOutline } from "react-icons/io5";
import { FaUmbrellaBeach } from "react-icons/fa";

const SecNavbar = () => {
  return (
    <div className="flex items-center flex-wrap justify-center m-2">
      <div className="text-white p-2 mx-8">
        <Link
          to="/hotel"
          className="w-28 h-24 flex flex-col m-2 p-3 rounded-xl hover:text-slate-200 focus:text-slate-200 hover:no-underline text-base font-bold items-center justify-center bg-blue-900"
        >
          <IoBusiness className="m-2" size={28} />
          Hotels
        </Link>
      </div>

      <div className="text-white p-2 mx-8">
        <Link
          to="/globe"
          className="w-28 h-24 flex flex-col m-2 p-3 rounded-xl hover:text-slate-200 focus:text-slate-200 hover:no-underline text-base font-bold items-center justify-center bg-blue-900"
        >
          <IoGlobeOutline className="m-2" size={28} />
          WorldClock
        </Link>
      </div>

      <div className="text-white p-2 mx-8">
        <Link
          to="/music"
          className="w-28 h-24 flex flex-col m-2 p-3 rounded-xl hover:text-slate-200 focus:text-slate-200 hover:no-underline text-base font-bold items-center justify-center bg-blue-900"
        >
          <IoMusicalNotesOutline className="m-2" size={28} />
          Music
        </Link>
      </div>

      <div className="text-white p-2 mx-8">
        <Link
          to="/traffic"
          className="w-28 h-24 flex flex-col m-2 p-3 rounded-xl hover:text-slate-200 focus:text-slate-200 hover:no-underline text-base font-bold items-center justify-center bg-blue-900"
        >
          <IoCarSharp className="m-2" size={28} />
          Traffic
        </Link>
      </div>

      <div className="text-white p-2 mx-8">
        <Link
          to="/trips"
          className="w-28 h-24 flex flex-col m-2 p-3 rounded-xl hover:text-slate-200 focus:text-slate-200 hover:no-underline text-base font-bold items-center justify-center bg-blue-900"
        >
          <FaUmbrellaBeach className="m-2" size={28} />
          Trips
        </Link>
      </div>

      <Link
        to="/"
        className="m-2 px-5 py-2 text-[12px] border hover:text-slate-400 hover:no-underline rounded-lg"
      >
        Clear
      </Link>
    </div>
  );
};

export default SecNavbar;
