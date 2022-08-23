import React, { useState } from 'react'

const WithCounter = (OriginalComponent) => {

    const NewComponent=()=>{
        const [count, setCount] = useState(0)


        const increamentCount=()=>{
            setCount(prevCount=>prevCount+1)
        }
        return <OriginalComponent count={count}increamentCount={increamentCount}/>
    }
  return NewComponent
}

export default WithCounter