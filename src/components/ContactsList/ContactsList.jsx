import React from 'react';
import PropTypes from 'prop-types';
import { Contacts } from './Styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactList = ({ filterContacts }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.contacts.isLoading);

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
    toast('The contact was successfully deleted', {
      type: 'success',
      autoClose: 100,
    });
  };

  return (
    <Contacts>
      {filterContacts.map(({ name, phone, id }) => {
        return (
          <li key={id}>
            <span>
              {name}: {phone}
            </span>
            <button
              disabled={isLoading}
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </Contacts>
  );
};

export default ContactList;

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};
