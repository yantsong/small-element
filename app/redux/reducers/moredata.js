import { MORECOURSE } from '../actions/action'

const initialState = {}

// redurc定义如何处理action,
export default function getMoreData(state = initialState, action) {
    switch (action.type) {
        case MORECOURSE:
            return action.data
        default:
            return state
    }
}