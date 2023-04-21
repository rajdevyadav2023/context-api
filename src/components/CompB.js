import React from 'react'
import CompC from './CompC'

const CompB = ({data}) => {
  return (
    <div className='comp-b'>
      <p>this is b component</p>
      <CompC data={data}/>
    </div>
  )
}

export default CompB
