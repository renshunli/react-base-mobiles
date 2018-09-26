import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { store } from './store/createStore.js'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import './util/rem.js'
import './assets/css/mixin.scss'
import { AppContainer } from 'react-hot-loader'


const render = Component =>{
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <HashRouter>
                    <Component/>
                </HashRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}
render(App)
registerServiceWorker()

if (module.hot) {
    module.hot.accept('./App', () => {
        // if you are using harmony modules ({modules:false})
        render(App)
    })
}
