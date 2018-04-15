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
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const store = configureStore();
            store.subscribe(
                () =>
            console.log(2,store.getState()))
  render(
        <Provider store={store}>
            <RouteMap history={hashHistory} />
        </Provider>,
    document.getElementById('root')
)