import {useRef, useEffect} from 'react'

export function usePreviousValue(value) {
    const cache = useRef(undefined)
    useEffect(()=> {
        cache.current = value
    },[value])

    return cache.current
}