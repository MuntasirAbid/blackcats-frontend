import React from 'react'

const PrimaryButton = ({ children, classes, handler }) => {
 return (
  <button
   onClick={handler}
   className={`text-white bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 hover:from-purple-500 hover:via-purple-700 hover:to-purple-500 focus:from-gray-200 focus:via-gray-400 focus:to-gray-200 hover:text-white ${classes}`}
  >
   {children}
  </button>
 )
}

export default PrimaryButton
