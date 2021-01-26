import React,{useState} from 'react';
import produce from 'immer';
import {useImmerState} from './hooks/useImmerState';

const baseState = [
    {
        todo: 'Learn typescript',
        done: true,
    },
    {
        todo: 'Try immer',
        done: false,
    },
];

const nextState = produce(baseState, (draftState, index) => {
    console.log(index);
    draftState.push({todo: 'Tweet about it'});
    draftState[1].done = true;
});

console.log(nextState);

const ImmerDemo = props => {
    const [state, setState] = useImmerState({
        a: 1,
        b: 2,
        c: {
            d: 4,
        },
    });

    const onClick = () => {
        setState(s => {
            s.c.d = 5;
        });
    };

    return (
        <div>
            <div>{JSON.stringify(state)}</div>
            <button onClick={onClick}>btn</button>
        </div>
    );
};

export default ImmerDemo;