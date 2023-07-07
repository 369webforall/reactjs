import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../features/counter/counterSlice';
const Counter = () => {
const count = useSelector((state)=>state.counter.value)

const dispatch = useDispatch();

const handleIncrease = ()=>{
    dispatch(increment())
}

const handleDecrease = ()=>{
    dispatch(decrement())
}

const handleReset = ()=>{
    dispatch(reset())
}
  return (
    <div>
        <p className='text-2xl text-purple-600'>count:{count}</p>
        <button className='bg-orange-600 px-2 py-1 mr-2' onClick={handleIncrease}>Increase</button>
        <button className='bg-orange-600 px-2 py-1 mr-2' onClick={handleDecrease}>Decrease</button>
        <button className='bg-orange-600 px-2 py-1 mr-2' onClick={handleReset}>Reset</button>
      
    </div>
  )
}

export default Counter
