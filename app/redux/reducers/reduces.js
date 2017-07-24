import { combineReducers } from 'redux'
import getMoreData from './moredata'
import addUserInfo from './adduserinfo'
import addNowMovie from './addnowmovie'

export default combineReducers({
    getMoreData,
    addUserInfo,
    addNowMovie
})