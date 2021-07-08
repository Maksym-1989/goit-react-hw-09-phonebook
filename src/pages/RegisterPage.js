import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/auth-operation";

const initialState = { name: "", email: "", password: "" };

const RegisterPage = () => {
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const onRegister = (state) => dispatch(register(state));

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onRegister(state);

    setState(initialState);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Name
          <input
            className="input"
            type="text"
            minLength="2"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            value={state.name}
          />
        </label>
        <label className="label">
          Email
          <input
            className="input"
            placeholder="sophie@example.com"
            minLength="5"
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
            minLength="6"
            required
            onChange={handleChange}
            value={state.password}
          />
        </label>
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
