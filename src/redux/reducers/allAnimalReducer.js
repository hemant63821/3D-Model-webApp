import { ALL_ANIMAL_ACTION } from '../../core/constants/action'
import { newState } from '../../core/utility/newState'

const intialState = {
    animals: {},
    isLoading: false
}

export default function allAnimalReducer(state = intialState, action) {

    switch (action.type) {
        case ALL_ANIMAL_ACTION.REQUEST:
            return newState(state, { isLoading: true })

        case ALL_ANIMAL_ACTION.SUCCESS:
            const { animals } = action.payload;
            return newState(state, { animals, isLoading: false })

        case ALL_ANIMAL_ACTION.FAILURE:
            const { error } = action.payload
            return newState(state, { error, ...intialState })

        default:
            return state;
    }
}