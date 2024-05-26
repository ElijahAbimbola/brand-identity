import React from 'react'
import logo from  "../components/images/Logo.png"
import { InputFieldIcon, PrimaryInputfield } from '../components/InputField'
import { PrimaryButton, SecondaryPurpleButton } from '../components/Button'

const SignUp = () => {
  return (
    <div className='flex '>
         <div className='bg-primary'>
       <div className=''>
        <img src={ logo }  alt='' />
       </div>
        <div className='py-36'>
            <p className='text-lg text-white'>
                Capture your users details,<br /> beautifully.
            </p>
            <h3 className='py-5'>Use this free cloneable form as an engaging way to capture long <br />form details from your users. This form is based on the webflow <br />slider component which is placed inside of a form element. This <br />allows us to add input fields on different slides and change the <br />content in the 100VH area.</h3>

            <h4 className='bg-darkgray border border-darkgray py-5'>Please note: Custom code is used for the price slider and the custom <br />slider arrows. Your site must be published to use the custom <br /> Details in page settings.</h4>
        </div>
    </div>
     <div className='px-36'>
        <div className=''>
        <img src={ logo }  alt='' />
       </div>
    <div className=' py-36'>
       <p>Let's start with your name</p>
       <h3>Please fill in the details below so that we can get in <br />contact with you about our product.</h3>
       <div className='flex justify-between py-5'>
        <div>
        Firstname 
        <div>
          <InputFieldIcon />
        </div>
        </div>
        <div>
        Lastname 
        <div>
          <InputFieldIcon />
        </div>
        </div>
       </div>
       <div>
      <p> Date of birth </p>
       <div>
        <PrimaryInputfield/>
       </div>
       </div>
       <div>
        <p> Date of birth </p>
       <div>
        <PrimaryInputfield/>
       </div>
       </div>
       <div className='py-10'>
        <SecondaryPurpleButton name={'Submit'}/>
       </div>
    </div>
    </div>
    </div>
  )
}

export default SignUp