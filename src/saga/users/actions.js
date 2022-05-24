import { actionTypesSaga } from "./actionTypes";

export const getUsers = () => {
    return({
        type: actionTypesSaga.GET_USERS,
    });
};
