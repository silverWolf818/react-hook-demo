import {useState} from 'react';
import useInterval from './hooks/useInterval';

const Time = props => {
    let [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    useInterval(() => {
        // 你自己的代码
        setCount(count + 1);
    }, isRunning ? 1000 : null);

    const stop = ()=> {
        setIsRunning(false);
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={stop}>stop</button>
        </>
    )
}

export default Time;