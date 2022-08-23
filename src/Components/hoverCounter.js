import React from 'react'
import withCounter from './HOC/withCounter'

const HoverCounter = (props) => {
    const {count, increamentCount} = props

    
  return (
    <div>
        <h2 onMouseOver={increamentCount}>Hovered {count} times</h2>
    </div>
  )
}

export default withCounter(HoverCounter)