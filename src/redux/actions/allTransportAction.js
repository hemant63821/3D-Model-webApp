import { getAllTransports } from '../../services/transportServices'
import { ALL_TRANSPORT_ACTION } from '../../core/constants/action'

export function getTransports() {
    return dispatch => {
        dispatch(request())
        return getAllTransports()
            .then(apiResponse => {
                if (apiResponse.message === 'success') {
                    const transports = apiResponse.transports
                    // console.log('check techs techs', techs)
                    dispatch(success({
                        transports,
                    }))
                } else {
                    return Promise.reject(apiResponse)
                }
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: ALL_TRANSPORT_ACTION.REQUEST } }
    function success(transports) { return { type: ALL_TRANSPORT_ACTION.SUCCESS, payload: { ...transports } } }
    function failure(error) { return { type: ALL_TRANSPORT_ACTION.FAILURE, payload: { error } } }
}