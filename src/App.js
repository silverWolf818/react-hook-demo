import {Suspense} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import StateDemo from './pages/StateDemo'
import EffectDemo from './pages/EffectDemo'
import EffectDemo1 from './pages/EffectDemo1'
// import HookDemo from './HookDemo';
// import User from './User';
// import ImmerDemo from './ImmerDemo';
// import Form, {useForm} from './components/Form';
// import Time from './Time';
// import Counter from './Counter';
// import EffectDemo from './EffectDemo';
// import './services/httpInterceptors';
// import IndicatorBoundary from './components/IndicatorBoundary';
// import BoundaryDemo from './BoundaryDemo';
// const [form] = useForm();
// console.log(form);
//
// const onConfirm = () => {
//     console.log(form.confirm());
// };
//
// const onReset = () => {
//     console.log(form.reset());
// };
// <EffectDemo />
// <button onClick={onConfirm}>confirm</button>
// <button onClick={onReset}>reset</button>
// <ImmerDemo/>
// <div>Time</div>
// <Time />
// <div>Counter</div>
// <Counter />
// <Form form={form}/>
// <HookDemo />
// <User/>
function App() {
    return (
        <Suspense fallback={<div>loading</div>}>
            <div className="App">
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/stateDemo">stateDemo</Link>
                                </li>
                                <li>
                                    <Link to="/effectDemo">EffectDemo</Link>
                                </li>
                                <li>
                                    <Link to="/effectDemo1">EffectDemo1</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/stateDemo">
                                <StateDemo />
                            </Route>
                            <Route path="/effectDemo">
                                <EffectDemo />
                            </Route>
                            <Route path="/effectDemo1">
                                <EffectDemo1 />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </Suspense>
    )
}

export default App
