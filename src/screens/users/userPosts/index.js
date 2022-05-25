import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../../saga/comments/actions";
import Comments from "../../comments";
import "./index.css";

const  UserPosts = ( { modal, setModal } ) => {
    const dispatch = useDispatch();
    const userPosts = useSelector(state => state.users.userPosts);

    const [commentModal, setCommentModal] = useState(false);

    const closeModal = () => {
        setModal(false);
    };

    const getPostComments = (id) => {
        setCommentModal(true);
        dispatch(getComments(id));
    };

    return (
        <div className={modal ? 'userPosts_modal userPosts_openModal' : 'userPosts_modal'}>
            <h1>User's posts</h1>
            {userPosts?.map((posts, i) => (
                <div onClick={() => getPostComments(posts.id)}  className="userPosts_case" key={i}>
                    <p><b>Title:</b> <i>{posts?.title}</i></p>
                    <p><b>Body:</b> <i>{posts?.body}</i></p>
                </div>
            ))}
            <button className="userPosts_close_button" onClick={closeModal}>CLOSE</button>
            <Comments commentModal={commentModal} setCommentModal={setCommentModal} />
        </div>
    );
};

export default UserPosts;