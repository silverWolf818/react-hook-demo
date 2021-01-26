import React, {useState, useEffect} from 'react';
import {usePreviousValue, useOriginalCopy} from 'huse';

const HookDemo = props => {
    const [value, setValue] = useState(1);
    const [user,setUser] = useState({
       name: 'zzh',
       title: 'fe',
       address: 'hb'
    });
    const prevValue = usePreviousValue(value);

    const object = {
        name: 'zzh',
    };

    const originalValue = useOriginalCopy(object);


    const originalUser = useOriginalCopy(user);

    useEffect(() => {
        console.log(originalValue);
    }, [originalValue]);

    useEffect(()=> {
        console.log(originalUser);
    },[originalUser])

    useEffect(()=> {
        console.log('run');
    },[user])

    useEffect(()=>{
        console.log('mounted');
    },[])

    return (
        <div>
            <p>prevValue:{prevValue}</p>
            <p>value:{value}</p>
            <button onClick={() => setValue(value + 1)}>btn</button>
            <button onClick={() => setUser({name: 'zzh', title: 'fe', address: 'hb'})}>test1</button>
            <button onClick={() => setUser({name: 'zzh1', title: 'fe', address: 'hb'})}>test2</button>
        </div>
    );
};

export default HookDemo;