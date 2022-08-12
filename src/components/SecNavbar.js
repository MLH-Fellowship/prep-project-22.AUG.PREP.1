import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { IoFastFoodOutline } from 'react-icons/io5'
import { IoMusicalNotesOutline } from 'react-icons/io5'
import { IoBusiness } from 'react-icons/io5'
import { IoCarSharp } from 'react-icons/io5'

const SecNavbar = () => {
  return (
    <div className='flex items-center justify-center m-2'>
      <div className='text-white p-2 mx-8'>
        <Link to="/hotel" className='w-28 h-24 flex flex-col m-2 p-3 rounded-xl hover:text-slate-200 focus:text-slate-200 hover:no-underline text-base font-bold items-center justify-center bg-blue-900'>
          <IoBusiness className='m-2' size={28} />
          Hotels
        </Link>
      </div>

      <div className='text-white p-2 mx-8'>
        <Link to="/food" className='w-28 h-24 flex flex-col m-2 p-3 rounded-xl hover:text-slate-200 focus:text-slate-200 hover:no-underline text-base font-bold items-center justify-center bg-blue-900'>
          <IoFastFoodOutline className='m-2' size={28} />
          Food
        </Link>
      </div>

      <div className='text-white p-2 mx-8'>
        <Link to="/music" className='w-28 h-24 flex flex-col m-2 p-3 rounded-xl hover:text-slate-200 focus:text-slate-200 hover:no-underline text-base font-bold items-center justify-center bg-blue-900'>
          <IoMusicalNotesOutline className='m-2' size={28} />
          Music
        </Link>
      </div>

      <div className='text-white p-2 mx-8'>
        <Link to="/traffic" className='w-28 h-24 flex flex-col m-2 p-3 rounded-xl hover:text-slate-200 focus:text-slate-200 hover:no-underline text-base font-bold items-center justify-center bg-blue-900'>
          <IoCarSharp className='m-2' size={28} />
          Traffic
        </Link>
      </div>

      <Link to="/" className='m-2 px-5 py-2 text-[12px] border hover:text-slate-400 hover:no-underline rounded-lg'>Clear</Link>
    </div>
  )
}

export default SecNavbar