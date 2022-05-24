import { takeEvery, call, put } from "redux-saga/effects";
import { setPosts } from "../../redux/posts/actions";
import { actionTypesSaga } from "./actionTypes";

const getPosts = async(url) => {
    const response = await fetch(url)
        .then((res)=>res.json())
        .catch((e)=>console.warn("getPosts: ", e));
    return response;
};

function* postsWorker () {
    try{
        const result = yield call(getPosts, "https://jsonplaceholder.typicode.com/posts");
        yield put(setPosts(result));
    } catch (error) {
        console.warn("postsWorker: ", error)
    }
};

export function* postsWatcher () {
    yield takeEvery(actionTypesSaga.GET_POSTS, postsWorker);
};
