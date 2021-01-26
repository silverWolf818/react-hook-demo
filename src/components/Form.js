import React, {forwardRef, useImperativeHandle} from 'react';
import useForm from '../hooks/useForm';

const Form = forwardRef((props, ref) => {
    const {form} = props;
    const [formInstance] = useForm(form);

    useImperativeHandle(ref, () => formInstance);

    formInstance.getInternalHooks({
        confirm: () => {
            console.log('save');
        },
        reset: ()=> {
            console.log('reset');
        }
    });

    return (
        <div><input type="text"/></div>
    );
});

export {
    useForm
};

export default Form;