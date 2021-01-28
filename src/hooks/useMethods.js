import {useMemo, useState} from 'react'

const useMethods = (initialValue, methods) => {
    const [value, setValue] = useState(initialValue)

    const reducer = (methods, [name, fn]) => {
        methods[name] = (...args) => {
            setValue(value => fn(value, ...args))
        }
        return methods
    }

    const boundMethod = useMemo(() => Object.entries(methods).reduce(reducer, {}), [methods])

    return [value, boundMethod]
}

export default useMethods
