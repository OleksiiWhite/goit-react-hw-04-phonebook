import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onFilter }) => {
  return (
    <input className={styles.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={onFilter}
      placeholder="Enter name for Search"
    />
  );
};


Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
