import { render } from 'react-dom'
import {hashHistory} from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  moreData from './redux/reducers/moredata.js'
import devToolsEnhancer from 'remote-redux-devtools';
import configureStore from './redux/store/Store.js'

import RouteMap from './router/routerMap.jsx'
import './reset.scss'
import './styles.scss'

const store = configureStore();
            store.subscribe(
                () =>
            console.log(1,store.getState()))
  render(
        <Provider store={store}>
            <RouteMap history={hashHistory} />
        </Provider>,
    document.getElementById('root')
)