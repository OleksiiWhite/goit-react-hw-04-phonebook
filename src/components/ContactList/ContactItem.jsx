import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onRemove }) => {
  return (
    <li key={id} className={styles.contacts}>
      <p>
        <span>{name} : </span>
        {number}
      </p>
      <button
        onClick={() => {
          onRemove(id);
        }}
      >
        ⛌
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactItem;
