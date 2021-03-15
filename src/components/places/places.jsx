import React from 'react';
import CitiesList from '../cities-list/cities-list';
import LocationList from '../location-list/location-list';
import {useSelector} from 'react-redux';
import LoaderScreensaver from '../loading/loading';

const Places = () => {
  const isCardsLoaded = useSelector((state) => state.DATA.isCardsLoaded);

  if (!isCardsLoaded) {
    return (
      <LoaderScreensaver />
    );
  }

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationList />
        </section>
      </div>
      <CitiesList />
    </main>
  );
};


export default Places;
