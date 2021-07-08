import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChangeFilter } from "../../redux/phonebook/phonebook-actions";

import css from "./Filter.module.css";
import { filterSelector } from "../../redux/phonebook/phonebook-selectors";

const Filter = () => {
  const filter = useSelector((state) => filterSelector(state));

  const dispatch = useDispatch();

  const changeFilter = (value) => dispatch(onChangeFilter(value));

  const onChange = (event) => {
    changeFilter(event.target.value);
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
