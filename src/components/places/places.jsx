import React from 'react';
import cardPropTypes from '../cities-card/cities-card.prop';
import CitiesList from '../cities-list/cities-list';
import PropTypes from 'prop-types';
import LocationList from '../location-list/location-list';
import NoPlaces from '../no-places/no-places';
import {getCityFiltredPlaces, getSortedPlaces} from '../../utils';
import {connect} from 'react-redux';
import {setLocation} from '../../store/action';
import LoaderScreensaver from '../loading/loading';
import {getCardsLoadedStatus, getOffersCards} from '../../store/offers-data/selectors';
import {getLocation, getSortType} from '../../store/screen/selectors';

const Places = (props) => {
  const {cards, handleCityChange, currentCity, sortType, isCardsLoaded} = props;

  if (!isCardsLoaded) {
    return (
      <LoaderScreensaver />
    );
  }

  const filteredPlacesByCities = getCityFiltredPlaces(cards);

  const currentCityPlaces = getSortedPlaces(filteredPlacesByCities[currentCity], sortType);

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList onCityClick={handleCityChange}/>
        </section>
      </div>
      {currentCityPlaces.length === 0 ? <NoPlaces /> : <CitiesList currentCityPlaces={currentCityPlaces} />}

    </main>
  );
};

Places.propTypes = {
  cards: PropTypes.arrayOf(
      cardPropTypes
  ),
  handleCityChange: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  isCardsLoaded: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  cards: getOffersCards(state),
  isCardsLoaded: getCardsLoadedStatus(state),
  currentCity: getLocation(state),
  sortType: getSortType(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleCityChange(evt) {
    const location = evt.target.innerText;
    dispatch(setLocation(location));
  }
});

export {Places};
export default connect(mapStateToProps, mapDispatchToProps)(Places);
