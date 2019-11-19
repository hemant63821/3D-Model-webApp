import { getAllNatures } from '../../services/natureServices'
import { ALL_NATURE_ACTION } from '../../core/constants/action'

export function getNatures() {
    return dispatch => {
        dispatch(request())
        return getAllNatures()
            .then(apiResponse => {
                if (apiResponse.message === 'success') {
                    const nature = apiResponse.natures
                    dispatch(success({
                        nature,
                    }))
                } else {
                    return Promise.reject(apiResponse)
                }
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: ALL_NATURE_ACTION.REQUEST } }
    function success(nature) { return { type: ALL_NATURE_ACTION.SUCCESS, payload: { ...nature } } }
    function failure(error) { return { type: ALL_NATURE_ACTION.FAILURE, payload: { error } } }
}