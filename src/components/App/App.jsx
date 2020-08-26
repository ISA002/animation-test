import React from 'react';
import PropTypes from 'prop-types';
/* import { Helmet } from 'react-helmet'; */

import config from 'config';

import AppRouter from 'components/AppRouter';
import 'styles/normalize.scss';
import styles from './App.scss';
import useBrowser from 'hooks/useBrowser';
import { Helmet } from 'react-helmet';

import { AnimateSharedLayout } from 'framer-motion';

const App = ({ routes }) => {
  const browser = useBrowser();

  if (RUNTIME_ENV === 'client') {
    console.info('browser', browser);
  }

  return (
    <div className={styles.app}>
      <AnimateSharedLayout type="crossfade">
        <Helmet {...config.app} />
        <AppRouter routes={routes} />
      </AnimateSharedLayout>
    </div>
  );
};

App.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default App;
