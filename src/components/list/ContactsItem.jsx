import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/myContacts/contactsSelectors';
import { deleteContact } from 'redux/myContacts/contactsOperations';
import {
  ContactsItem,
  Text,
  ItemWrap,
  DeleteButton,
  Wrapp,
} from './ContactsItem.styled';
import SpinnerBootstrap from 'components/spinner/Spinner';
import CloseButton from 'react-bootstrap/CloseButton';

export const Item = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const [idToDelete, setIdToDelete] = useState(null);

  return (
    <Wrapp>
      <ContactsItem>
        <ItemWrap>
          {' '}
          <Text>{name}</Text>
        </ItemWrap>
        <ItemWrap>
          {' '}
          <Text>{number}</Text>
        </ItemWrap>
      </ContactsItem>{' '}
      <DeleteButton
        type="button"
        id={id}
        onClick={() => {
          setIdToDelete(id);
          dispatch(deleteContact(id));
        }}
        disabled={isLoading}
        variant="light"
      >
        {id === idToDelete ? <SpinnerBootstrap /> : <CloseButton />}
      </DeleteButton>
    </Wrapp>
  );
};
