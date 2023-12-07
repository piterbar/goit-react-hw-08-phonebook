import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { List, Name, ContactsTitle } from './ContactsList.styled';
import { getVisibleContacts } from '../../redux/myContacts/contactsSelectors';
import { ContactsListContainer } from './ContactsList.styled';
import { Item } from './ContactsItem';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ContactsListContainer>
      <ContactsTitle>Contacts list</ContactsTitle>
      <List>
        <Name>Name</Name> <span>Phone</span>
        {contacts &&
          contacts.map(({ id, name, number }) => {
            return <Item key={id} id={id} name={name} number={number} />;
          })}
      </List>
    </ContactsListContainer>
  );
};

ContactList.propTypes = {
  contactsInfo: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
};
