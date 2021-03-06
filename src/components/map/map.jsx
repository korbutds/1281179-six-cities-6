import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import cardPropTypes from '../cities-card/cities-card.prop';
import {CitiesInfo} from '../../const';
import {useSelector} from 'react-redux';
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {cards, cardId} = props;

  const city = useSelector((state) => state.SCREEN.location);
  const map = useRef();

  useEffect(() => {
    const cityCoords = CitiesInfo[city].coords;
    const cityZoom = CitiesInfo[city].zoom;

    map.current = leaflet.map(`map`, {
      center: cityCoords,
      zoom: cityZoom,
      zoomControl: false,
      marker: true,
    });

    map.current.setView(cityCoords, cityZoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map.current);

    return () => {
      map.current.remove();
    };
  }, [city]);

  useEffect(() => {
    cards.forEach(({id, location, title}) => {
      const customIcon = leaflet.icon({
        iconUrl: `${id === cardId ? `./img/pin-active.svg` : `./img/pin.svg`}`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: location.latitude,
        lng: location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(map.current)
      .bindPopup(title);
    });
  }, [cardId, cards]);

  return (<section className="property__map map" id="map" ></section>);
};

Map.propTypes = {
  cards: PropTypes.arrayOf(
      cardPropTypes
  ),
  cardId: PropTypes.number
};

export default Map;
