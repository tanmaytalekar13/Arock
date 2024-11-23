import React from 'react'
import HeadingText from './HeadingText'
import SubHeading from './SubHeading'
const CenterText = () => {
  return (
    <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center'>
       <HeadingText/>
       <SubHeading/>
    </div>
  )
}

export default CenterText