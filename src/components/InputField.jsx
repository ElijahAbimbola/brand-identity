import React from 'react'

export const InputFieldIcon = ({name, type, placeholder, onchange}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} onChange={onchange} className='px-2 border-2 border-darkgray w-full h-14  text-sm ' />
  )
};

export const PrimaryInputfield = ({name, type, placeholder, onchange}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} onChange={onchange} className=' px-2 border-2 w-full h-14  border-darkgray  text-sm  ' />
  )
}