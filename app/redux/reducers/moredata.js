import { combineReducers } from 'redux'
import { MORECOURSE } from '../actions/action'

const initialState = {
    coursedata: ''
}

// redurc定义如何处理action,
function getMoreData(state = initialState, action) {
    switch (action.type) {
        case MORECOURSE:
            return Object.assign({}, state, {
                coursedata: action.data
            })
        default:
            return state
    }
}

const moreData = combineReducers({
    getMoreData
})
export default moreData;