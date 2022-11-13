import React from 'react'

const Error = ({error}) => {
  // Renders the error message when an error occurs
  return (
    <p className='text-errorRed font-bold'>{error}</p>
  )
}

export default Error