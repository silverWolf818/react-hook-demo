import {useRef, useState} from 'react';

export class FormStore {

    constructor(forceRootUpdate) {
        this.forceRootUpdate = forceRootUpdate;
        this.callback = {};
    }

    confirm = (value) => {
        return this.callback.confirm(value);
    };

    reset = ()=> {
        return this.callback.reset();
    }

    getForm = () => ({
        confirm: this.confirm,
        reset: this.reset,
        getInternalHooks: this.getInternalHooks,
    });

    getInternalHooks = callbacks => {
        this.callback = callbacks;
    };
}

function useForm(form) {
    const formRef = useRef();
    const [, forceUpdate] = useState({});

    if (!formRef.current) {
        if (form) {
            formRef.current = form;
        } else {
            const forceReRender = () => {
                forceUpdate({});
            };

            const formStore = new FormStore(forceReRender);

            formRef.current = formStore.getForm();
        }
    }

    return [formRef.current];
}

export default useForm;