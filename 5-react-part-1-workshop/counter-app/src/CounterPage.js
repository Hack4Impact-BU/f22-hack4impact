import React from 'react';
import {useState} from 'react'

function CounterPage() {
    let [countNum, setCount] = useState(0)

    let increaseValue = () => {
        setCount(countNum + 1)
    }
    let decreaseValue = () => {
        if (countNum !== 0) {
            setCount(countNum - 1)
        }
    }
    let resetValue = () => {
        setCount(0)
    }

    return (
        <div>
            <h1> {countNum} </h1>

            <button onClick={decreaseValue}>-</button>
            <button onClick={increaseValue}>+</button>
            <button onClick={resetValue}>Reset</button>
        </div>
    )
}
export default CounterPage