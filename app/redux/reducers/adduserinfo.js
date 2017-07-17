import { ADDUUERSINFO } from '../actions/action'
import { MYMOVIE } from '../actions/action'
const initialState = { movie: [] };
export default function adduserinfo(state = initialState, action) {
    switch (action.type) {
        case ADDUUERSINFO:
            return Object.assign({}, state, {
                name: action.data.name,
                avatar: action.data.avatars.small
            })
        case MYMOVIE:
            state.movie.push(action.data)
            const newarr = state.movie
            return Object.assign({}, state, {
                movie: newarr
            })
        default:
            return state
    }
}