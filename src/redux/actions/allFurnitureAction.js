import { getAllFurnitures } from '../../services/furnitureServices'
import { ALL_FURNITURE_ACTION } from '../../core/constants/action'

export function getFurnitures() {
    return dispatch => {
        dispatch(request())
        return getAllFurnitures()
            .then(apiResponse => {
                if (apiResponse.message === 'success') {
                    const furnitures = apiResponse.furnitures
                    dispatch(success({
                        furnitures,
                    }))
                } else {
                    return Promise.reject(apiResponse)
                }
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: ALL_FURNITURE_ACTION.REQUEST } }
    function success(furnitures) { return { type: ALL_FURNITURE_ACTION.SUCCESS, payload: { ...furnitures } } }
    function failure(error) { return { type: ALL_FURNITURE_ACTION.FAILURE, payload: { error } } }
}