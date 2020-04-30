import React  from 'react';
import PropTypes from 'prop-types';
import styles from 'Detail.css';

const Detail = ({ image, name, description }) => (
  <figure className={styles.Detail}>
    <img src={image} alt={name} />
    <figcaption>{name}</figcaption>
    <figcaption>{description}</figcaption>
  </figure>
);

Detail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};
export default Detail;
