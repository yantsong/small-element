import { combineReducers } from 'redux'
import getMoreData from './moredata'
import addUserInfo from './adduserinfo'

export default combineReducers({
    getMoreData,
    addUserInfo
})