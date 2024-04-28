import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <button className=' border font-semibold text-xl border-violet-500 p-4 rounded-lg '
                onClick={() => dispatch(increment())}>
                Increment
            </button>
            <br />
            <br />

            <div className='flex justify-center items-center border border-red-500 width- rounded-md'>{count}</div>


            <br />
            <button className=' border font-semibold text-xl border-violet-500 p-4 rounded-lg '
                onClick={() => dispatch(decrement())}>
                Decrement
            </button>


        </div>
    )
}

export default Counter