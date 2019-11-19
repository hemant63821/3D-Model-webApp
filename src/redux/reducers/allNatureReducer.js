import { ALL_NATURE_ACTION } from '../../core/constants/action'
import { newState } from '../../core/utility/newState'

const intialState = {
    nature: {},
    isLoading: false
}

export default function allNatureReducer(state = intialState, action) {

    switch (action.type) {
        case ALL_NATURE_ACTION.REQUEST:
            return newState(state, { isLoading: true })

        case ALL_NATURE_ACTION.SUCCESS:
            const { nature } = action.payload;
            return newState(state, { nature, isLoading: false })

        case ALL_NATURE_ACTION.FAILURE:
            const { error } = action.payload
            return newState(state, { error, ...intialState })

        default:
            return state;
    }
}