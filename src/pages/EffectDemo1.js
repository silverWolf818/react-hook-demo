import React, {useState, useEffect, useCallback} from 'react'
import useInterval from '../hooks/useInterval'

function format(time) {
    var remainTime = ' '
    var day = Math.floor(parseInt(time) / 1000 / 60 / 60 / 24)
    var hour = Math.floor(parseInt(time) / 1000 / 60 / 60) % 24
    var minute = Math.floor(parseInt(time) / 1000 / 60) % (60)
    var second = Math.floor(parseInt(time) / 1000) % (60)
    if (hour > 0) {
        let temp = day * 24 + hour
        remainTime += (temp > 9 ? temp : `0${temp}`) + ':'
    } else {
        remainTime += '00:'
    }
    if (minute > 0) {
        remainTime += (minute > 9 ? minute : `0${minute}`) + ':'
    } else {
        remainTime += '00:'
    }
    if (second > 0) {
        remainTime += (second > 9 ? second : `0${second}`) + ''
    } else {
        remainTime += '00'
    }
    return remainTime
}

const EffectDemo1 = props => {
    const [count, setCount] = useState('')
    const [isRunning, setIsRunning] = useState(true)
    const [count1, setCount1] = useState(0)
    const [uid, setUid] = useState('')
    const [t, setT] = useState(0)
    // useEffect(() => {
    //     let id = setInterval(() => {
    //         setCount1(count1 + 1)
    //     }, 1000)
    //     return () => clearInterval(id)
    // }),[]

    const fn = useCallback(() => {
        if (uid) {
            setCount(format(+new Date() - t))
        }
    }, [t, uid])

    useEffect(() => {
        fn()
    }, [fn])

    useInterval(() => {
        fn()
    }, isRunning ? 1000 : null)

    const changeUser = (value) => {
        setUid(Math.random().toString(36).substr(2, 6))
        setT(value)
    }

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
            <div>
                <button onClick={() => changeUser(1611632489512)}>user1</button>
                <button onClick={() => changeUser(1611632520733)}>user2</button>
            </div>
            <button onClick={stop}>stop</button>
            <button onClick={Reply}>Reply</button>
        </div>
    )
}

export default EffectDemo1