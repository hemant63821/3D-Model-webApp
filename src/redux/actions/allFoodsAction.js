import { getAllFoods } from '../../services/foodServices'
import { ALL_FOODS_ACTION } from '../../core/constants/action'

export function getFoods() {
    return dispatch => {
        dispatch(request())
        return getAllFoods()
            .then(apiResponse => {
                if (apiResponse.message === 'success') {
                    const foods = apiResponse.foods
                    dispatch(success({
                        foods,
                    }))
                } else {
                    return Promise.reject(apiResponse)
                }
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: ALL_FOODS_ACTION.REQUEST } }
    function success(foods) { return { type: ALL_FOODS_ACTION.SUCCESS, payload: { ...foods } } }
    function failure(error) { return { type: ALL_FOODS_ACTION.FAILURE, payload: { error } } }
}