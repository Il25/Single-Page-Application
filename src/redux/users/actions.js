import { actionTypes } from "./actionTypes";

export const setUsers = (data) => {
    return({
        type: actionTypes.SET_USERS,
        payload: data,
    });
};