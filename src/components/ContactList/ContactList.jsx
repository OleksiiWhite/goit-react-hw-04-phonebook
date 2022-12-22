import React from 'react';
import styles from './ContactList.module.css';
import ContactItem from './ContactItem';
// import Contact from './ContactList';
import PropTypes from 'prop-types';
const ContactList = ({ contacts, onRemove, children }) => {
  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      {children}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default ContactList;
