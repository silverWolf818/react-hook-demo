import React from 'react'
import Form, {useForm} from '../components/Form'

const FormDemo = () => {
    const [form] = useForm()
    const onConfirm = () => {
        console.log(form.confirm())
    }

    const onReset = () => {
        console.log(form.reset())
    }

    return (
        <>
            <Form form={form}>
                <button onClick={onConfirm}>confirm</button>
                <button onClick={onReset}>reset</button>
            </Form>
        </>
    )
}

export default FormDemo