import { actionTypes } from "./actionTypes";

export const setComments = (data) => {
    return({
        type: actionTypes.SET_COMMENTS,
        payload: data,
    });
};