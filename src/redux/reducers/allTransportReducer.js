import { ALL_TRANSPORT_ACTION } from '../../core/constants/action'
import { newState } from '../../core/utility/newState'

const intialState = {
    transports: {},
    isLoading: false
}

export default function allTransportReducer(state = intialState, action) {

    switch (action.type) {
        case ALL_TRANSPORT_ACTION.REQUEST:
            return newState(state, { isLoading: true })

        case ALL_TRANSPORT_ACTION.SUCCESS:
            // console.log('action.payload', action.payload)
            const { transports } = action.payload;
            return newState(state, { transports, isLoading: false })

        case ALL_TRANSPORT_ACTION.FAILURE:
            const { error } = action.payload
            return newState(state, { error, ...intialState })

        default:
            return state;
    }
}