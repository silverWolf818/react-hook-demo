import React, {useState, useEffect} from 'react'
import {usePreviousValue} from '../hooks/usePreviousValue'
import {useImmerState} from '../hooks/useImmerState'

const StateDemo = props => {
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({
        id: 1,
        name: 'zhangsan',
        address: 'beijing'
    })

    // const [user,setUser] = useImmerState({
    //     id: 1,
    //     name: 'lisi',
    //     address: 'hubei'
    // })

    // const prev = usePreviousValue(count)

    useEffect(() => {
        console.log('enter useEffect')
        return ()=> {
            console.log('destroy useEffect')
        }
    }, [user])

    const onAdd = () => {
        setCount(count + 1)
    }

    const onChangeUser = () => {
        setUser({
            id: 1,
            name: 'zhangsan',
            address: 'beijing'
        })
        // setUser(s => {
        //     s.id = 1
        //     s.name = 'zhangsan'
        //     s.address = 'beijing'
        // })
    }

    console.log('render')

    return (
        <div>
            <h2>State Demo</h2>
            {/*<div>prev: {prev}</div>*/}
            <div>current: {count}</div>
            <br/>
            <button onClick={onAdd}>add</button>
            <br/>
            <br/>
            <br/>
            <div>
                id: {user.id}
                <br/>
                name: {user.name}
                <br/>
                address: {user.address}
            </div>
            <br/>
            <button onClick={onChangeUser}>change user</button>
        </div>
    )
}

export default StateDemo