import React from 'react'
import Navbar from '../Layout/Navbar'
import { PrimaryInputfield,InputFieldIcon } from '../components/InputField'
import { PrimaryPurpleButton ,SecondaryPurpleButton } from '../components/Button'
import logo from '../components/images/Logo.png'
import { Link } from 'react-router-dom'
import { LuCalendarDays } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { LuArrowLeft } from "react-icons/lu";

const Identity = () => {
  return (
    <div>
      <div className='flex'>
      <Navbar />
      <div className=''>
       <div className='w-full flex justify-end  py-10'>
      <PrimaryPurpleButton  name={ 'Contact Support' } />
    </div>
     <div className='px-36'>
        <div className=''>
        <img src={ logo }  alt='' />
       </div>
    <div className=' py-5'>
       <p className='text-md font-semibold'>Type Of Identification Document</p>
       <h3 className='text-sm'>2 id's Must Be Submitted </h3>
       
        <div>
        I.D Type
        <div>
          <InputFieldIcon  placeholder={ 'eg. sarah smith' }/>
        </div>
        </div>
      
       <div>
      <p> Expiry Date </p>
       <div className='relative'>
        <LuCalendarDays className=' absolute bottom-5 left-4' />
        <PrimaryInputfield />
       </div>
       </div>
       <div>
        <p> I.D Number </p>
       <div>
        <PrimaryInputfield placeholder={ 'eg. sarah smith' }/>
       </div>
       </div>
       <div className='w-full left'>
       <div className='flex  '>
        <h3>Add second ID </h3>
          <div className=' bg-gray-300'> <LuPlus /> </div>
       </div>
       </div>
       <Link to={ '' } >
       <div className='py-10 flex'>
        <div className='bg-gray-300 h-16 top-5 '>
          <LuArrowLeft />
        </div>
        <SecondaryPurpleButton name={'Next Stop'} type={ 'button' }/>
       </div>
       </Link>
       </div>
       </div>
       </div>
     </div>
    </div>
  )
}

export default Identity