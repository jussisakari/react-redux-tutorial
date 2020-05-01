import * as actionTypes from './actionTypes';

export const saveResult = (payload) => {
    return {
        type: actionTypes.STORE_RESULT,
        payload: payload
    }
};

export const storeResult = (payload) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(payload));
        }, 2000);
    }
};

// export const storeResult = (payload) => {
//     return (dispatch, getState) => {
//         setTimeout(() => {
//             const oldCounter = getState().ctr.counter;
//             console.log(oldCounter);
//             dispatch(saveResult(payload));
//         }, 2000);
//     }
// };

export const deleteResult = (payload) => {
    return {
        type: actionTypes.DELETE_RESULT,
        payload: payload
    }
};