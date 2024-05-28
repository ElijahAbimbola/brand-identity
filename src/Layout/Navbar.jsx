import React from 'react'
import logo from  "../components/images/Logo.png"
const Navbar = () => {
  return (
    <div>
           
         <div className='bg-primary'>
       <div className=''>
        <img src={ logo }  alt='' />
       </div>
        <div className='py-36 text-white px-5'>
            <p className='text-lg '>
                Capture your users details,<br /> beautifully.
            </p>
            <h3 className='py-5'>Use this free cloneable form as an engaging way to capture long <br />form details from your users. This form is based on the webflow <br />slider component which is placed inside of a form element. This <br />allows us to add input fields on different slides and change the <br />content in the 100VH area.</h3>

            <h4 className='bg-darkgray border rounded-x1 border-darkgray py-3 px-3'>Please note: Custom code is used for the price slider and the custom <br />slider arrows. Your site must be published to use the custom <br /> Details in page settings.</h4>
        </div>
    </div>
    </div>

  )
}

export default Navbar