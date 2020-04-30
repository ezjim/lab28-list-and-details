import React from 'react';
import PropTypes from 'prop-types';
import Detail from './Detail';
import styles from './List.css';

const List = ({ lists }) => {
  const listElements = lists.map((list, key) => (
    <li key={key}>
      <Detail {...list} />
    </li>
  ));

  return (
    <ul className={styles.List}>
      {listElements}
    </ul>
  );
};

List.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }))
};

export default List;
