import { ALL_FURNITURE_ACTION } from '../../core/constants/action'
import { newState } from '../../core/utility/newState'

const intialState = {
    furnitures: {},
    isLoading: false
}

export default function allFurnitureReducer(state = intialState, action) {

    switch (action.type) {
        case ALL_FURNITURE_ACTION.REQUEST:
            return newState(state, { isLoading: true })

        case ALL_FURNITURE_ACTION.SUCCESS:
            const { furnitures } = action.payload;
            return newState(state, { furnitures, isLoading: false })

        case ALL_FURNITURE_ACTION.FAILURE:
            const { error } = action.payload
            return newState(state, { error, ...intialState })

        default:
            return state;
    }
}