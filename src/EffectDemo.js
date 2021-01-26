import {useState,useEffect} from 'react';
import Child from './Child';
import ErrorBoundary from './components/ErrorBoundary';
import httpRequest from './services/httpRequest';

const EffectDemo = ()=> {
    const [count, setCount] = useState(0);
    useEffect(() => {
        window.addEventListener('hashchange', function() {
            console.log('The hash has changed!')
        }, false);
        httpRequest('https://api.github.com/users/ruanyf').then(r => {
            console.log(r);
        })
        console.log(`useEffect ${count}`);
        document.title = `You clicked ${count} times`;
        return ()=> {
            console.log(`Uninstall useEffect ${count}`);
        }
    });

    console.log(`render`);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <ErrorBoundary>
                <Child />
            </ErrorBoundary>
        </div>
    );
}

export default EffectDemo;