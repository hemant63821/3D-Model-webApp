import { getAllAnimals } from '../../services/animalServices'
import { ALL_ANIMAL_ACTION } from '../../core/constants/action'

export function getAnimals() {
    return dispatch => {
        dispatch(request())
        return getAllAnimals()
            .then(apiResponse => {
                console.log('check response', apiResponse)
                if (apiResponse.message === 'success') {
                    const animals = apiResponse.animals
                    dispatch(success({
                        animals,
                    }))
                } else {
                    return Promise.reject(apiResponse)
                }
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: ALL_ANIMAL_ACTION.REQUEST } }
    function success(animals) { return { type: ALL_ANIMAL_ACTION.SUCCESS, payload: { ...animals } } }
    function failure(error) { return { type: ALL_ANIMAL_ACTION.FAILURE, payload: { error } } }
}