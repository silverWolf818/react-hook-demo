import React, {useState, useEffect} from 'react'

const EffectDemo = props => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            console.log(`You clicked ${count} times`)
        }, 3000)
    })

    const getCount = () => {
        setTimeout(() => {
            alert(count);
        }, 3000);
    }

    return (
        <div>
            <h2>EffectDemo</h2>
            <p>clicked {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={getCount}>get Count</button>
        </div>
    )
}

export default EffectDemo