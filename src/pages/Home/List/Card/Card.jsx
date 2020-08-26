import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './Card.scss';
import imga from 'images/b.jpg';

const Card = ({ id, title, category }) => {
  return (
    <li className={style.card}>
      <div className={style.cardContentContainer}>
        <motion.div
          className={style.cardContent}
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className={style.cardImageContainer}
            layoutId={`card-image-container-${id}`}
          >
            <img className={style.cardImage} src={imga} alt="" />
          </motion.div>
          <motion.div
            className={style.titleContainer}
            layoutId={`title-container-${id}`}
          >
            <h1 className={style.category}>{category}</h1>
            <h2 className={style.title}>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={style.cardOpenLink} />
    </li>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  category: '',
  id: '',
};

export default Card;
