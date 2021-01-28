import React from 'react'
import {useRecoilState, useRecoilValue} from 'recoil'
import {UserState, NameState, currentUserQuery} from '../models'

const RecoilDemo = props => {
    const [userState, setUser] = useRecoilState(UserState)
    const nameProp = useRecoilValue(NameState)
    const data = useRecoilValue(currentUserQuery)

    const changeUser = ()=> {
        setUser({
            user:'yyx990803',
            address: 'beijing',
        })
    }

    return (
        <div>
            <p>RecoilDemo</p>
            <p>
                <button onClick={changeUser}>change User</button>
            </p>
            <p>{userState.user}</p>
            <p>{JSON.stringify(nameProp)}</p>
            <p>{JSON.stringify(data, null, 2)}</p>
        </div>
    )
}

export default RecoilDemo