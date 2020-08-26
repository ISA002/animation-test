import React from 'react';
import { AnimatePresence } from 'framer-motion';
import List from './List';
import Item from './Item';
import PropTypes from 'prop-types';

const Home = ({ match }) => {
  const { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
};

Home.propTypes = {
  match: PropTypes.any,
  id: PropTypes.string,
};

Home.defaultProps = {
  match: {},
  id: null,
};

export default Home;
