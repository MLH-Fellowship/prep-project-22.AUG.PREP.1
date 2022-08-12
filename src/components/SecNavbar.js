import React from 'react'

import { IoFastFoodOutline } from 'react-icons/io5'
import { IoMusicalNotesOutline } from 'react-icons/io5'
import { IoBusiness } from 'react-icons/io5'
import { IoCarSharp } from 'react-icons/io5'

const SecNavbar = () => {
  return (
    <div className='flex items-center justify-center m-2'>
      <div className='text-white p-2 mx-8'>
        <button className='w-28 h-24 flex flex-col m-2 p-3 rounded-xl text-base font-bold items-center justify-center bg-blue-900'>
          <IoBusiness className='m-2' size={28} />
          Hotels
        </button>
      </div>

      <div className='text-white p-2 mx-8'>
        <button className='w-28 h-24 flex flex-col m-2 p-3 rounded-xl text-base font-bold items-center justify-center bg-blue-900'>
          <IoFastFoodOutline className='m-2' size={28} />
          Food
        </button>
      </div>

      <div className='text-white p-2 mx-8'>
        <button className='w-28 h-24 flex flex-col m-2 p-3 rounded-xl text-base font-bold items-center justify-center bg-blue-900'>
          <IoMusicalNotesOutline className='m-2' size={28} />
          Music
        </button>
      </div>

      <div className='text-white p-2 mx-8'>
        <button className='w-28 h-24 flex flex-col m-2 p-3 rounded-xl text-base font-bold items-center justify-center bg-blue-900'>
          <IoCarSharp className='m-2' size={28} />
          Traffic
        </button>
      </div>

      <button className='m-2 px-5 py-2 text-[12px] border rounded-lg'>Clear</button>
    </div>
  )
}

export default SecNavbar