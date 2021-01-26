import {useState, useEffect, useRef} from 'react';

function Counter() {
    let [count, setCount] = useState(0);

    // useEffect(() => {
    //     let id = setInterval(() => {
    //         setCount(count + 1);
    //     }, 1000);
    //     return () => clearInterval(id);
    // });

    // useEffect(() => {
    //     let id = setInterval(() => {
    //         setCount(c => c + 1)
    //     }, 1000);
    //     return () => clearInterval(id);
    // }, []);

    const savedCallback = useRef();

    function callback() {
        setCount(count + 1);
    }

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        let id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <>
            <h1>{count}</h1>
        </>
    );
}

export default Counter;