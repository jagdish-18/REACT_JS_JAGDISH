import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Purchase_book from './BookAction'

const BookContainer = () => {
    const noOfBook =  useSelector(state => state.NumOfBook)
    const dispatch = useDispatch()
  return (
    <div className='text-center'>
      <h1>BookContainer</h1>
      <h2>No Of Book - {noOfBook}</h2>
      <button onClick={() => (dispatch(Purchase_book()))}>BuyBook</button>
    </div>
  )
}

export default BookContainer
