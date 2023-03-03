import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Wrapper from './Wrapper/Wrapper';
import { nanoid } from 'nanoid';
import styles from './App.module.css';
import ContactsWrapper from './ContactsWrapper/ContactsWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsAction } from 'redux/contacts/contactsSlice';
import { getContacts } from 'redux/contacts/contactsSelector';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = ({ number, name }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContactsAction(contact));
  };

  return (
    <div className={styles.container}>
      <Wrapper>
        <ContactsForm
          title="Phonebook"
          handleSubmit={handleSubmit}
          contacts={contacts}
        />

        <ContactsWrapper>
          <Filter />
          <ContactsList title="Contacts" />
        </ContactsWrapper>
      </Wrapper>
    </div>
  );
};
