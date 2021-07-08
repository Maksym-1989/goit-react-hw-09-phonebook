import React from "react";
import { useSelector } from "react-redux";
import AuthNav from "../authNav/AuthNav";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import { getIsAuth } from "../../redux/auth/auth-selectors";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector((state) => getIsAuth(state));

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
