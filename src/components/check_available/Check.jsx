import React from 'react'

function Check(props) {
  if (props.disable) {
    return <span>Not Available</span>
  }
  return (
    <span>Available</span>
  )
}

export default Check