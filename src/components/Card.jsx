import React from 'react'

const Card = ({children}) => {
  return (
    <div className='card'>
        <h1 className="heading">Quiz App</h1>
        {children}
    </div>
  )
}

export default Card