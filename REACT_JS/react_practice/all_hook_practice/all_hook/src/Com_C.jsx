import React, { useContext } from 'react'
import {data , data1} from './App'


const Com_C = () => {

    const firstName = useContext(data);
    const gender = useContext(data1)

  return (
    <>
      <h1>hi may name is {firstName} and may gender is {gender}</h1>
    </>
  )
}

export default Com_C
