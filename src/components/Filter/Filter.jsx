import { useDispatch, useSelector } from 'react-redux';
import { getFiltered } from 'redux/contacts/contactsSelector';
import {
  // changeFilterAction,
  filterContactsAction,
} from 'redux/contacts/contactsSlice';
// import { useEffect, useState } from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  // const [filterInput, setFilterInput] = useState('');
  const dispatch = useDispatch();
  const filtered = useSelector(getFiltered);

  const handleFilter = ev => {
    const { value } = ev.target;
    dispatch(filterContactsAction(value.trim()));
    // setFilterInput(value.trim());
  };

  // useEffect(() => {
  //   dispatch(filterContactsAction(filterInput));
  // }, [filterInput, dispatch]);

  // const filter = useSelector(getFilter);

  return (
    <label name="filter" className={styles.wrapper}>
      <span className={styles.text}>You can find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={filtered}
        onChange={ev => {
          handleFilter(ev);
          // const { value } = ev.target;
        }}
        className={styles.input}
      />
    </label>
  );
};

Filter.propTypes = {
  // handleFilter: PropTypes.func.isRequired,
  // filter: PropTypes.string.isRequired,
};

export default Filter;
