import React from 'react'

function Check(props) {
  if (props.disable) {
    return <span className='black'>Not Available</span>
  }
  return (
    <span className='green'>Available</span>
  )
}

export default Check