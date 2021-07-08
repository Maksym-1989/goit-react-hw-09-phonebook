import React, { useEffect, useState } from "react";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

import {
  addContact,
  getAllContacts,
} from "../../redux/phonebook/phonebook-operation";
import {
  getItemsSelector,
  loadingSelector,
} from "../../redux/phonebook/phonebook-selectors";

const initialState = { name: "", number: "" };

const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const contacts = useSelector((state) => getItemsSelector(state));
  const loading = useSelector((state) => loadingSelector(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const addNewContact = (name, number) => dispatch(addContact(name, number));

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name } = state;

    if (contacts.some((element) => element.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    addNewContact(state.name, state.number);

    setState(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            value={state.name}
          />
        </label>

        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            onChange={handleChange}
            value={state.number}
          />
        </label>

        <button type="submit" className="btn">
          Add Contact
        </button>
      </form>
      <div className={css.spinerContainer}>
        {loading ? (
          <Loader
            type="Circles"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={10000}
            className={css.spiner}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ContactForm;
