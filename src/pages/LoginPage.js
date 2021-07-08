import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/auth-operation";

const initialState = { email: "", password: "" };

const LoginPage = () => {
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();
  const onLogin = (state) => dispatch(logIn(state));

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(state);
    setState(initialState);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Email
          <input
            className="input"
            placeholder="sophie@example.com"
            minlength="5"
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            onChange={handleChange}
            value={state.email}
          />
        </label>
        <label className="label">
          Password
          <input
            className="input"
            type="password"
            name="password"
            minlength="6"
            required
            onChange={handleChange}
            value={state.password}
          />
        </label>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

