import { ADDNOWMOVIE } from '../actions/action'
const initialState = {}
export default function addNowMovie(state = initialState, action) {
    switch (action.type) {
        case ADDNOWMOVIE:
            return action.data

        default:
            return state
    }
}