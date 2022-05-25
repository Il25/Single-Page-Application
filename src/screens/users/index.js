import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts, getUsers } from "../../saga/users/actions";
import "./index.css";
import UserPosts from "./userPosts";

const Users= () => {
    const dispatch = useDispatch();
    const usersScreen = useSelector(state => state.users.users);

    const [userPostsModal, setuserPostsModal] = useState(false);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const getUserPostsModal = (id) => {
        setuserPostsModal(true);
        dispatch(getUserPosts(id));
    };
    
    return (
        <div className="users">
           <div className="users_title">ALL USERS</div>
           {usersScreen?.map((user, i) => (
               <div onClick={() => getUserPostsModal(user.id)} className="users_screen" key={i}>
                    <p><b>Name:</b> <i>{user?.name}</i></p>
                    <p><b>User name:</b> <i>{user?.username}</i></p>
                    <p><b>Email:</b> <i>{user?.email}</i></p>
                    <p><b>Phone:</b> <i>{user?.phone}</i></p>
                    <p><b>Website:</b> <i>{user?.website}</i></p>
                </div>
           ))}
           <UserPosts modal={userPostsModal} setModal={setuserPostsModal}/>
        </div>
    );
};

export default Users;