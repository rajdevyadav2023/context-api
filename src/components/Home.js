import React from 'react'
import CompA from './CompA';
import { useState } from 'react';

const Home = () => {
    const [data, setData]= useState("Jai Sri Krishna");
  return (
    <div className='home'>
      <h2>Home Component, Data : {data}</h2>
     <CompA data={data}/>
    </div>
  )
}

export default Home
