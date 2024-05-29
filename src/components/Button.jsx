import React from 'react'

export const PrimaryButton = ({name, onclick, loading, type}) => {
  return (
    <button className='text-center bg-lilac text-grey text-sm px-28 py-3 rounded-sm' onClick={onclick} type={type}>
        {name}
    </button>
  )
}

export const SecondaryButton = ({name, onclick, loading, type}) => {
  return (
    <button className='text-center text-grey text-sm px-28 py-3 border border-grey rounded-sm' onClick={onclick} type={type}>
        {name}
    </button>
  )
}
export const SecondaryPurpleButton = ({name, onclick, loading, type}) => {
  return (
    <button className='text-center text-white text-sm w-72 py-5 border border-grey  bg-purple' onClick={onclick} type={type}>
        {name}
    </button>
  )
}

export const PurpleButton = ({name, onclick, loading, type}) => {
  return (
    <button className='text-center text-white text-sm w-96 py-5 border border-grey  bg-purple' onClick={onclick} type={type}>
        {name}
    </button>
  )
}
export const PrimaryPurpleButton = ({name, onclick, loading, type}) => {
  return (
    <button className='text-center text-white text-sm  py-3 px-5 border border-grey  bg-purpleheart rounded-3xl' onClick={onclick} type={type}>
        {name}
    </button>
  )
}