import * as actions from "./actions";
import {createReducer} from '@reduxjs/toolkit';
import {FetchStatus} from "../../const";

export const initialState = {
  cards: null,
  favoriteCard: null,
  fetchStatus: FetchStatus.PENDING
};

const newCardList = (stateCards, currentCard) => {
  const cardIndex = stateCards.findIndex((card) => card.id === currentCard.id);
  if (cardIndex === -1) {
    return stateCards;
  }
  return [...stateCards.slice(0, cardIndex), currentCard, ...stateCards.slice(cardIndex + 1)];
};

const offersData = createReducer(initialState, (builder) => {
  builder.addCase(actions.getCards, (state, action) => {
    state.cards = action.payload;
  });
  builder.addCase(actions.getFavoriteCards, (state, action) => {
    state.favoriteCard = action.payload;
  });
  builder.addCase(actions.changeFavoriteStatus, (state, action) => {
    state.cards = newCardList(state.cards, action.payload);
  });
  builder.addCase(actions.changeFetchStatus, (state, action) => {
    state.fetchStatus = action.payload;
  });
});

export default offersData;
