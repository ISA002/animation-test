import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { items } from 'stubs';
import PropTypes from 'prop-types';
import style from './Item.scss';
import imga from 'images/b.jpg';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Item = ({ id }) => {
  const body = document.querySelector('body');
  const { title } = items.find(item => item.id === id);

  React.useEffect(() => {
    disableBodyScroll(body);
    return () => {
      enableBodyScroll(body);
    };
  }, [body]);

  return (
    <>
      <div className={`${style.cardContentContainer} ${style.open}`}>
        <motion.div
          className={style.cardContent}
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className={style.cardImageContainer}
            layoutId={`card-image-container-${id}`}
          >
            <img className={style.cardImage2} src={imga} alt="pic" />
          </motion.div>
          <motion.div
            className={style.titleContainer}
            layoutId={`title-container-${id}`}
          >
            <h2 className={style.title}>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className={style.overlay}
      >
        <Link className={style.link} to="/" />
      </motion.button>
    </>
  );
};

Item.propTypes = {
  id: PropTypes.string,
};

Item.defaultProps = {
  id: null,
};

export default Item;
