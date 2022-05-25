import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

const Comments = ( { modal, setModal } ) => {
    const comments = useSelector(state => state.comments.comments);

    const closeModal = () => {
        setModal(false);
    };

    return (
        <div className={modal ? 'modal openModal' : 'modal'}>
            <h1>Comments to this Post</h1>
            {comments?.map((comment, i) => (
                <div className="comment_case" key={i}>
                    <p><b>Comment:</b> <i>{comment?.body}</i></p>
                    <p><b>Name:</b> <i>{comment?.name}</i></p>
                    <p><b>Email:</b> <i>{comment?.email}</i></p>
                </div>
            ))}
            <button className="close_button" onClick={closeModal}>CLOSE</button>
        </div>
    );
};

export default Comments;