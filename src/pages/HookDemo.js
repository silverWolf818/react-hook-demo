import React from 'react'
import useVisible from '../hooks/useVisible'

const HookDemo = () => {
    const [visible1, openVisible1, closeVisible1] = useVisible()
    const [visible2, openVisible2, closeVisible2] = useVisible(true)
    return (
        <div>
            <p>HookDemo</p>
            {
                visible1 && <p>modal1</p>
            }
            <button onClick={openVisible1}>open1</button>
            <button onClick={closeVisible1}>close1</button>
            <br/>
            <br/>
            {
                visible2 && <p>modal2</p>
            }
            <button onClick={openVisible2}>open2</button>
            <button onClick={closeVisible2}>close2</button>
        </div>
    )
}

export default HookDemo