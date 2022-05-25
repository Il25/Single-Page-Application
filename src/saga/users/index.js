import { takeEvery, call, put } from "redux-saga/effects";
import { setUserPosts, setUsers } from "../../redux/users/actions";
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

function* userPostsWorker (action) {
    console.log('aaaaaaaaaaaaaaa')
    try {
        const result = yield call(getUsers, `https://jsonplaceholder.typicode.com/posts?userId=${action.id}`);
        console.log(result);
        yield put(setUserPosts(result));
    } catch (error) {
        console.warn("userPostsWorker:", error);
    }
};

export function* usersWatcher () {
    yield takeEvery(actionTypesSaga.GET_USERS, usersWorker);
};

export function* userPostsWatcher () {
    console.log('aaaaa')
    yield takeEvery(actionTypesSaga.GET_USER_POSTS, userPostsWorker);
};