import React from 'react';

import { items } from 'stubs';
import PropTypes from 'prop-types';
import style from './List.scss';
import Card from './Card';

const List = ({ selectedId }) => {
  return (
    <ul className={style.cardList}>
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
};

List.propTypes = {
  selectedId: PropTypes.string,
};

List.defaultProps = {
  selectedId: null,
};

export default List;
