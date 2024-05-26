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
    <button className='text-center text-white text-sm px-28 py-5 border border-grey rounded-xl w-96 bg-purple-900' onClick={onclick} type={type}>
        {name}
    </button>
  )
}