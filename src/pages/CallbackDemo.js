import React, {memo, useMemo, useState, useCallback} from 'react'

const CountButton = ({id, onClick, count}) => {
    console.log('render: ' + id)
    return <button onClick={onClick}>{count}</button>
}

const CountMemoButton = memo(CountButton)

const CallbackDemo = () => {
    const [count1, setCount1] = useState(0)
    // const increment1 = () => setCount1(c => c + 1)
    const increment1 = useCallback(() => setCount1(c => c + 1), [])

    const [count2, setCount2] = useState(0)
    // const increment2 = () => setCount2(c => c + 1)
    const increment2 = useCallback(() => setCount2(c => c + 1), [])

    const array = useMemo(() => [1, 2, 3], [])
    // const array = [1, 2, 3]

    return (
        <>
            {/*<CountButton id='count1' count={count1} onClick={increment1}/>*/}
            {/*<CountButton id='count2' count={count2} onClick={increment2}/>*/}
            <CountMemoButton array={array} id='count1' count={count1} onClick={increment1}/>
            <CountMemoButton array={array} id='count2' count={count2} onClick={increment2}/>
        </>
    )
}

export default CallbackDemo
