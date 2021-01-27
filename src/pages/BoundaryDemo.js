import React, {useState} from 'react'
import {useResource} from 'react-suspense-boundary'
import IndicatorBoundary from '../components/IndicatorBoundary'

const request = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 'zzh') {
                resolve('zzh')
            } else {
                reject()
            }
        }, 1000)
    })
}

const fetchUser = async ({id}) => {
    try {
        return await request(id)
    } catch (e) {
        throw new Error('invoked a function that will 100% crash')
    }
}

const Child = () => {
    const [query, setQuery] = useState('zzh')
    const [data] = useResource(fetchUser, {id: query})

    const crash = () => {
        setQuery('')
    }

    return (
        <>
            <div>BoundaryDemo {data}</div>
            <button onClick={crash}>crash</button>
        </>
    )
}

const BoundaryDemo = () => {
    return (
        <IndicatorBoundary>
            <Child/>
        </IndicatorBoundary>
    )
}

export default BoundaryDemo