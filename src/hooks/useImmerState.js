import {useState, useCallback} from 'react';
import produce from 'immer';

const isProducer = value => {
    return typeof value === 'function';
};

export function useImmerState(initialState) {
    const [state, setState] = useState(initialState);
    const produceState = useCallback((next) => {
            if (isProducer(next)) {
                return setState(state => produce(state, next));
            }
            return setState(next);
        }, []);

    return [state, produceState];
}