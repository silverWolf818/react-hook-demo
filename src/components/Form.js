import React, {forwardRef, useImperativeHandle} from 'react'
import useForm from '../hooks/useForm'

const Form = forwardRef((props, ref) => {
    const {form, children} = props
    const [formInstance] = useForm(form)

    useImperativeHandle(ref, () => formInstance)

    formInstance.getInternalHooks({
        confirm: (value) => {
            console.log(value)
        },
        reset: () => {
            console.log('reset')
        },
    })

    return (
        <div>
            {children}
        </div>
    )
})

export {
    useForm,
}

export default Form