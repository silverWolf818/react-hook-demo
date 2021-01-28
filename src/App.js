import {Suspense} from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import StateDemo from './pages/StateDemo'
import EffectDemo from './pages/EffectDemo'
import EffectDemo1 from './pages/EffectDemo1'
import CallbackDemo from './pages/CallbackDemo'
import CallbackDemo1 from './pages/CallbackDemo1'
import AsyncDemo from './pages/AsyncDemo'
import ErrorBoundaryDemo from './pages/ErrorBoundaryDemo'
import BoundaryDemo from './pages/BoundaryDemo'
import FormDemo from './pages/FormDemo'
import HookDemo from './pages/HookDemo'
import RecoilDemo from './pages/RecoilDemo'

function App() {
    return (
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
                            <li>
                                <Link to="/callbackDemo">CallbackDemo</Link>
                            </li>
                            <li>
                                <Link to="/callbackDemo1">CallbackDemo1</Link>
                            </li>
                            <li>
                                <Link to="/asyncDemo">AsyncDemo</Link>
                            </li>
                            <li>
                                <Link to="/errorBoundaryDemo">ErrorBoundaryDemo</Link>
                            </li>
                            <li>
                                <Link to="/boundaryDemo">BoundaryDemo</Link>
                            </li>
                            <li>
                                <Link to="/formDemo">FormDemo</Link>
                            </li>
                            <li>
                                <Link to="/hookDemo">HookDemo</Link>
                            </li>
                            <li>
                                <Link to="/recoilDemo">RecoilDemo</Link>
                            </li>
                        </ul>
                    </nav>
                    <Suspense fallback={<div>loading</div>}>
                        <Switch>
                            <Route path="/stateDemo">
                                <StateDemo/>
                            </Route>
                            <Route path="/effectDemo">
                                <EffectDemo/>
                            </Route>
                            <Route path="/effectDemo1">
                                <EffectDemo1/>
                            </Route>
                            <Route path="/callbackDemo">
                                <CallbackDemo/>
                            </Route>
                            <Route path="/callbackDemo1">
                                <CallbackDemo1/>
                            </Route>
                            <Route path="/asyncDemo">
                                <AsyncDemo/>
                            </Route>
                            <Route path="/errorBoundaryDemo">
                                <ErrorBoundaryDemo/>
                            </Route>
                            <Route path="/boundaryDemo">
                                <BoundaryDemo/>
                            </Route>
                            <Route path="/formDemo">
                                <FormDemo/>
                            </Route>
                            <Route path="/hookDemo">
                                <HookDemo/>
                            </Route>
                            <Route path="/recoilDemo">
                                <RecoilDemo/>
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        </div>
    )
}

export default App
