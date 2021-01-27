import React, {useState,useEffect, useCallback,useRef} from 'react'

const CallbackDemo1 = () => {
    const [height, setHeight] = useState(0)
    const [visible, setVisible] = useState(false)
    const ref1 = useRef(null)
    useEffect(()=> {
        console.log(ref1)
        if (ref1.current) {
            setHeight(ref1.current.getBoundingClientRect().height)
        }
    },[])

    // const ref = useCallback(element => {
    //     if (element !== null) {
    //         setHeight(element.getBoundingClientRect().height)
    //     }
    // }, [])


    return (
        <div>
            {
                visible && <p ref={ref1}>useCallback ref</p>
            }
            {/*{*/}
            {/*    visible && <p ref={ref}>useCallback ref</p>*/}
            {/*}*/}
            <p>{Math.round(height)}</p>
            <button onClick={()=>setVisible(!visible)}>btn</button>
        </div>
    )
}

export default CallbackDemo1
