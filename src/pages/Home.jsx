import React from 'react'
import manage from '../components/images/manage.png'
import { PrimaryButton, SecondaryButton } from '../components/Button'
import { Link } from 'react-router-dom'

export default function Home () {

  return (
    <div>
        <div className=' flex justify-between w-full'>
        <div className=''>
        <img src={ manage } alt='' />
          </div>
          <div className='py-60'>
                <p className='text-lg text-grey'>Create a Free Account</p>
                <h4 className='text-sm text-grey px-10 pb-5'>Enjoy Full Features on the Store Manager</h4>
                <Link to='/SignUp' >
                <div className='py-5'>
                <PrimaryButton name={ "I'm interested! Sign me Up " } type={ "button" } />
                </div>
                </Link>
                <Link to='/Login'>
                <div>
                <SecondaryButton name={ "I have an account! Log In " } type={ "button" } />
                </div>
                </Link>
          </div>
    </div>
    </div>
  )
}

