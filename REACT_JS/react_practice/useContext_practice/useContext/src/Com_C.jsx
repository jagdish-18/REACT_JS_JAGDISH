import React from 'react'
import { useContext } from 'react'
import { data, data1 } from './App'

const Com_C = () => {

  const FirstName = useContext(data)
  const gender = useContext(data1)

  return (
    <div>
      <h1>may name is {FirstName} and gender is {gender}</h1>
      <h2>hey may name is{FirstName}</h2>
    </div>
  )
}

export default Com_C