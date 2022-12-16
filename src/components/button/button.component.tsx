import React from 'react'

interface buttonName {
  name : string
}
export const Button = ({name} : buttonName) => {
  
  return (
    <div>
      <button>{name}</button>
    </div>
  )
}
