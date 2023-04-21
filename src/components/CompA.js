import React from 'react'
import CompB from './CompB'

const CompA = ({data}) => {
  return (
    <div className='comp-a'>
      <p>this is a component</p>
      
      <CompB data={data}/>
    </div>
  )
}

export default CompA
