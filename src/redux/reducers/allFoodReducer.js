import { ALL_FOODS_ACTION } from '../../core/constants/action'
import { newState } from '../../core/utility/newState'

const intialState = {
    foods: {},
    isLoading: false
}

export default function allFoodReducer(state = intialState, action) {

    switch (action.type) {
        case ALL_FOODS_ACTION.REQUEST:
            return newState(state, { isLoading: true })

        case ALL_FOODS_ACTION.SUCCESS:
            const { foods } = action.payload;
            return newState(state, { foods, isLoading: false })

        case ALL_FOODS_ACTION.FAILURE:
            const { error } = action.payload
            return newState(state, { error, ...intialState })

        default:
            return state;
    }
}