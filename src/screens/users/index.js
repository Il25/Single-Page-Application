import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../saga/users/actions";
import "./index.css";

const Users= () => {
    const dispatch = useDispatch();
    const usersScreen = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);
    
    return (
        <div className="users">
           <div className="users_title">ALL USERS</div>
           {usersScreen?.map((user, i) => (
               <div className="users_screen" key={i}>
                    <p><b>Name:</b> <i>{user?.name}</i></p>
                    <p><b>User name:</b> <i>{user?.username}</i></p>
                    <p><b>Email:</b> <i>{user?.email}</i></p>
                    <p><b>Phone:</b> <i>{user?.phone}</i></p>
                    <p><b>Website:</b> <i>{user?.website}</i></p>
                </div>
           ))}
        </div>
    );
};

export default Users;