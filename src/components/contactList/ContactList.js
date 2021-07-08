import React from "react";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-operation";
import {
  errorSelector,
  getFilteredContactsSelector,
} from "../../redux/phonebook/phonebook-selectors";

const ContactList = () => {
  const filteredContacts = useSelector((state) =>
    getFilteredContactsSelector(state)
  );
  const error = useSelector((state) => errorSelector(state));

  const dispatch = useDispatch();

  const deleteContactById = (id) => dispatch(deleteContact(id));

  return (
    <ul>
      {!error ? (
        filteredContacts.map(({ name, number, id }) => (
          <li key={id} className={css.item}>
            <p className={css.text}>
              {name}: {number}
            </p>
            <button
              className="btn-list"
              type="button"
              onClick={() => deleteContactById(id)}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p>Server error</p>
      )}
    </ul>
  );
};

export default ContactList;
