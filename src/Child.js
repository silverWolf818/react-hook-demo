import {useEffect, useState} from 'react';

const Child = (props) => {
    const [state, setState] = useState('');
    useEffect(() => {
        if (state) {
            console.log(props.a.b);
        }
    }, [state]);

    const onClick = () => {
        setState('ok');
    };

    const onClick2 = ()=> {
        console.log(props.a.b);
    }

    return (
        <div>
            <button onClick={onClick}>test1</button>
            <br/>
            <button onClick={onClick2}>test2</button>
        </div>
    );
};

export default Child;