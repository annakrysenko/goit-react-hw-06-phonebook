import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelector';
import { deleteContactsAction } from 'redux/contacts/contactsSlice';
import styles from './ContactsList.module.css';

const ContactsList = ({ title }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  // const filtered = useSelector(getFiltered);

  // let contactsArr;
  // filtered && filtered.length > 0
  //   ? (contactsArr = filtered)
  //   : (contactsArr = contacts);

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {contacts && contacts.length > 0 ? (
          contacts.map(contact => (
            <li key={contact.id} className={styles.item}>
              <p>
                <span>{contact.name}:</span>
                <span>{contact.number}</span>
              </p>
              <button
                type="button"
                onClick={() => dispatch(deleteContactsAction(contact.id))}
                className={styles.delete}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className={styles.no_contacts}>There are no contacts here</p>
        )}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContactsList;
