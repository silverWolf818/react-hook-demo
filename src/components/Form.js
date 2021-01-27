import React, {forwardRef, useImperativeHandle} from 'react'
import useForm from '../hooks/useForm'

const Form = forwardRef((props, ref) => {
    const {form, children} = props
    const [formInstance] = useForm(form)

    useImperativeHandle(ref, () => formInstance)

    formInstance.getInternalHooks({
        confirm: () => {
            console.log('save')
        },
        reset: () => {
            console.log('reset')
        },
    })

    return (
        <div>
            <div><input type="text"/></div>
            <p>
                {children}
            </p>
        </div>
    )
})

export {
    useForm,
}

export default Form