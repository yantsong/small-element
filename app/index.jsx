import { render } from 'react-dom'
import {hashHistory} from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  moreData from './redux/reducers/moredata.js'
import devToolsEnhancer from 'remote-redux-devtools';

import RouteMap from './router/routerMap.jsx'
import './reset.scss'
import './styles.scss'

const store = createStore(moreData, devToolsEnhancer());

  render(
        <Provider store={store}>
            <RouteMap history={hashHistory} />
        </Provider>,
    document.getElementById('root')
)