import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUserName } from "../../redux/auth/auth-selectors";
import bender from "../../img/333.png";
import { logOut } from "../../redux/auth/auth-operation";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const name = useSelector((state) => getAuthUserName(state));

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logOut());

  return (
    <div className={css.usermenu_container}>
      <img src={bender} alt="" width="40" className={css.usermenu_avatar} />

      <p className={css.username}>Welcome, {name} </p>

      <button type="button" className={css.btn} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
