import React from 'react'

const PrimaryButton = ({ children, classes, handler }) => {
 return (
  <button
   onClick={handler}
   className={`text-white bg-gradient-to-r from-green-400 via-green-600 to-green-400 hover:from-green-500 hover:via-green-700 hover:to-green-500 focus:from-gray-200 focus:via-gray-400 focus:to-gray-200 hover:text-white ${classes}`}
  >
   {children}
  </button>
 )
}

export default PrimaryButton
