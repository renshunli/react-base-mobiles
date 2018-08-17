import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { store } from './store.js'
import { Provider } from 'react-redux';
import { HashRouter, Route} from 'react-router-dom';
import './util/rem.js';
import './assets/css/mixin.scss'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={App}></Route>
        </HashRouter>
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()
