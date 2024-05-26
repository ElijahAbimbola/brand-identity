import React from 'react'
import logo from  "../components/images/Logo.png"
import { InputFieldIcon, PrimaryInputfield } from '../components/InputField'
import { PrimaryButton, PrimaryPurpleButton, SecondaryPurpleButton } from '../components/Button'
import Navbar from '../Layout/Navbar'
import { Link } from 'react-router-dom'
import { LuCalendarDays } from "react-icons/lu";

const SignUp = () => {
  return (
    <div className='flex '>
         {/* <div className='bg-primary'>
       <div className=''>
        <img src={ logo }  alt='' />
       </div>
        <div className='py-36 text-white'>
            <p className='text-lg '>
                Capture your users details,<br /> beautifully.
            </p>
            <h3 className='py-5'>Use this free cloneable form as an engaging way to capture long <br />form details from your users. This form is based on the webflow <br />slider component which is placed inside of a form element. This <br />allows us to add input fields on different slides and change the <br />content in the 100VH area.</h3>

            <h4 className='bg-darkgray border border-darkgray py-5'>Please note: Custom code is used for the price slider and the custom <br />slider arrows. Your site must be published to use the custom <br /> Details in page settings.</h4>
        </div>
    </div> */}
    < Navbar /> 
    <div>
    <div className='w-full flex justify-end  py-10'>
      <PrimaryPurpleButton  name={ 'Contact Support' } />
    </div>
     <div className='px-36'>
        <div className=''>
        <img src={ logo }  alt='' />
       </div>
    <div className=' py-20'>
       <p>Let's start with your name</p>
       <h3>Please fill in the details below so that we can get in <br />contact with you about our product.</h3>
       <div className='flex justify-between py-5'>
        <div>
        Firstname 
        <div>
          <InputFieldIcon  placeholder={ 'eg. sarah smith' }/>
        </div>
        </div>
        <div>
        Lastname 
        <div>
          <InputFieldIcon placeholder={ 'eg. sarah smith' } />
        </div>
        </div>
       </div>
       <div>
      <p> Date of birth </p>
       <div className='relative'>
        <LuCalendarDays className=' absolute bottom-5 left-4' />
        <PrimaryInputfield />
       </div>
       </div>
       <div>
        <p> Date of birth </p>
       <div>
        <PrimaryInputfield placeholder={ 'eg. sarah smith' }/>
       </div>
       </div>
       <Link to={ '/Identity' } >
       <div className='py-10'>
        <SecondaryPurpleButton name={'Get Started'} type={ 'button' }/>
       </div>
       </Link>
    </div>
    </div>
    </div>
    </div>
  )
}

export default SignUp