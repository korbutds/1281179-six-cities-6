import React, {useState} from 'react';
import cardPropTypes from '../cities-card/cities-card.prop';
import CitiesList from '../cities-list/cities-list';
import PropTypes from 'prop-types';
import LocationList from '../location-list/location-list';
import {getCitySortedPlaces} from '../../utils';
import NoPlaces from '../no-places/no-places';
import {connect} from 'react-redux';
import {setLocation} from '../../store/action';

const Places = (props) => {
  const {cards, onCityChange, currentCity} = props;
  const [cardId, setCardId] = useState(null);

  const sortedPlacesByCities = getCitySortedPlaces(cards);

  const currentCityPlaces = sortedPlacesByCities[currentCity];

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList onCityClick={onCityChange}/>
        </section>
      </div>
      {currentCityPlaces.length === 0 ? <NoPlaces /> : <CitiesList cards={currentCityPlaces} onCursorHandle={setCardId} cardId={cardId} />}

    </main>
  );
};

Places.propTypes = {
  cards: PropTypes.arrayOf(
      cardPropTypes
  ),
  onCityChange: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  cards: state.cards,
  currentCity: state.location
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(evt) {
    const location = (evt.target.innerText);
    dispatch(setLocation(location));
  }
});

export {Places};
export default connect(mapStateToProps, mapDispatchToProps)(Places);
