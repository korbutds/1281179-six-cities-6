import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main/main';

const App = ({cards}) => (
  <MainScreen
    cards = {cards}
  />
);


App.propTypes = {
  cards: PropTypes.arrayOf(
      PropTypes.shape({
        previewImage: PropTypes.string,
        isPremium: PropTypes.bool,
        price: PropTypes.number,
        title: PropTypes.string,
        type: PropTypes.string,
        rating: PropTypes.number
      })
  )
};

export default App;
