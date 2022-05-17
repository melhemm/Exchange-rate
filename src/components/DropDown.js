import React from 'react'

export const DropDown = () => {
  return (
    <select defaultValue="" onChange={(e) => handleRatesChange(e.target.value)}> 
      <option value="Currency"></option>
    </select>
  )
}
