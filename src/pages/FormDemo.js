import React from 'react'
import Form, {useForm} from '../components/Form'

const FormDemo = () => {
    const [form] = useForm()
    const onConfirm = () => {
        form.confirm({name:'zzh'})
    }

    const onReset = () => {
        form.reset()
    }

    return (
        <Form form={form}>
            <div><input type="text"/></div>
            <button onClick={onConfirm}>confirm</button>
            <button onClick={onReset}>reset</button>
        </Form>
    )
}

export default FormDemo