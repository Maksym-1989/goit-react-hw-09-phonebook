import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuth } from "../..//redux/auth/auth-selectors";
import css from "./Navigation.module.css";
import home from "../../img/home.png";

const Navigation = () => {
  const isAuth = useSelector((state) => getIsAuth(state));

  return (
    <nav className={css.nav}>
      <NavLink
        exact
        to="/"
        className={css.nav_link}
        activeClassName={css.active_nav_link}
      >
        <img src={home} alt="Home page" width="40" />
        Home
      </NavLink>
      {isAuth && (
        <NavLink
          exact
          to="/contacts"
          className={css.nav_link}
          activeClassName={css.active_nav_link}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
