import { ADDUUERSINFO } from '../actions/action'
const initialState = { movie: [] };
export default function adduserinfo(state = initialState, action) {
    switch (action.type) {
        case ADDUUERSINFO:
            state.movie.push(action.data)
            return Object.assign({}, state, {
                name: action.data.name,
                avatar: action.data.avatars.small
            })


        default:
            return state
    }
}