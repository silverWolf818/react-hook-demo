import {useRef, useEffect} from 'react'
import shallowEquals from 'shallowequal'
import deepEquals from 'fast-deep-equal'

export function useOriginalCopy(value, equals = shallowEquals) {
    const cache = useRef(value)
    const equalsRef = useRef(equals)

    useEffect(() => {
        equalsRef.current = equals
    }, [equals])

    useEffect(() => {
        if (!equalsRef.current(cache.current, value)) {
            cache.current = value
        }
    }, [value])

    return equals(cache.current, value) ? cache.current : value
}

export function useOriginalDeepCopy(value) {
    return useOriginalCopy(value, deepEquals)
}