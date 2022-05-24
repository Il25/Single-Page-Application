import { takeEvery, call, put } from "redux-saga/effects";
import { setUsers } from "../../redux/users/actions";
import { actionTypesSaga } from "./actionTypes";

const getUsers = async(url) => {
    const response = await fetch(url)
        .then((res)=>res.json())
        .catch((e)=>console.warn("getUsers: ", e));
    return response;
};

function* usersWorker () {
    try {
        const result = yield call(getUsers, "https://jsonplaceholder.typicode.com/users");
        yield put(setUsers(result));
    } catch (error) {
        console.warn("usersWorker:", error);
    }
};

export function* usersWatcher () {
    yield takeEvery(actionTypesSaga.GET_USERS, usersWorker);
};
