import React, {useState, useEffect} from 'react'
import useInterval from '../hooks/useInterval'

const EffectDemo1 = props => {
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(true)
    const [count1, setCount1] = useState(0)

    // useEffect(() => {
    //     let id = setInterval(() => {
    //         setCount1(count1 + 1)
    //     }, 1000)
    //     return () => clearInterval(id)
    // }),[]

    useInterval(() => {
        setCount(count + 1)
    }, isRunning ? 1000 : null)

    const stop = () => {
        setIsRunning(false)
    }

    const Reply = () => {
        setIsRunning(true)
    }

    return (
        <div>
            <h2>EffectDemo1</h2>
            <div>count1: {count1}</div>
            <div>count: {count}</div>
            <button onClick={stop}>stop</button>
            <button onClick={Reply}>Reply</button>
        </div>
    )
}

export default EffectDemo1