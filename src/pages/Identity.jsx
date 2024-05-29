import React from 'react'
import Navbar from '../Layout/Layout'
import { PrimaryInputfield,InputFieldIcon } from '../components/InputField'
import { PrimaryPurpleButton ,SecondaryPurpleButton } from '../components/Button'
import logo from '../components/images/Logo.png'
import { Link } from 'react-router-dom'
import { LuCalendarDays } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
// import { LuArrowLeft } from "react-icons/lu";
import { BsArrowLeft } from "react-icons/bs";

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
    <div className=' py-10'>
       <p className='text-md font-semibold'>Type Of Identification Document</p>
       <h3 className='text-sm'>2 id's Must Be Submitted </h3>
       
        <div className='py-5'>
        I.D Type
        <div >
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
       <div className='py-5'>
        <p> I.D Number </p>
       <div>
        <PrimaryInputfield placeholder={ 'eg. sarah smith' }/>
       </div>
       </div>
       <div className='w-full '>
       <div className='flex justify-end  '>
        <h3>Add second ID </h3>
          <div className=' bg-gray-300 px-2'> <LuPlus /> </div>
       </div>
       </div>
       <Link to={ '' } >
       <div className='py-10 flex justify-between'>
        <div className='bg-gray-300 px-3 py-5 '>
          <BsArrowLeft />
        </div>
        <div className='w-72'>
        <SecondaryPurpleButton  name={'Next Stop'} type={ 'button' }/>
        </div>
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