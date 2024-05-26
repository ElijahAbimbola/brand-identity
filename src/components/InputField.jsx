import React from 'react'

export const InputFieldIcon = ({name, type, placeholder, onchange}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} onChange={onchange} className='rounded-xl border-2 w-full h-14  border-black text-sm ' />
  )
};

export const PrimaryInputfield = ({name, type, placeholder, onchange}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} onChange={onchange} className='rounded-xl border-2 w-full h-14  border-black text-sm  ' />
  )
}