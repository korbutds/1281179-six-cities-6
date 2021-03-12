import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_LOCATION: `screen/changeLocation`,
  CHANGE_SORT: `screen/changeSort`,
  REDIRECT: `screen/redirect`,
  LOAD_CARDS: `offers/loadData`,
  LOAD_CURRENT_OFFER: `current/loadCurrentOffer`,
  LOAD_NEAR_PLACES: `current/loadNearPlaces`,
  LOAD_COMMENTS: `current/loadCardComments`,
  CLEAR_CURRENT_STATE: `current/clearCurrentState`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_USERNAME: `user/changeName`,
  SET_USER_AVATAR: `user/changeAvatar`,
  SET_USER_INFO: `user/changeUserInfo`,
  CHANGE_FAVORITE_STATUS: `offers/changeFavoriteStatus`,
  CHANGE_FAVORITE_FLAG: `offers/changeFavoriteFlag`

};

export const setLocation = createAction(ActionType.CHANGE_LOCATION, (location) => ({
  payload: location
}));

export const setSort = createAction(ActionType.CHANGE_SORT, (sort) => ({
  payload: sort
}));

export const getCards = createAction((ActionType.LOAD_CARDS), (cards) => ({
  payload: cards
}));

export const getCurrentOffer = createAction(ActionType.LOAD_CURRENT_OFFER, (card) => ({
  payload: card
}));

export const getNearPlaces = createAction(ActionType.LOAD_NEAR_PLACES, (cards) => ({
  payload: cards
}));
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status
}));

export const setUserName = createAction(ActionType.CHANGE_USERNAME, (userName) => ({
  payload: userName
}));

export const setUserInfo = createAction(ActionType.SET_USER_INFO, (userName, userAvatar) => ({
  payload: {
    userName,
    userAvatar
  }
}));

export const setUserAvatar = createAction(ActionType.SET_USER_AVATAR, (url) => ({
  payload: url
}));

export const redirect = createAction(ActionType.REDIRECT, (url) => ({
  payload: url
}));

export const getComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments
}));

export const changeFavoriteStatus = createAction(ActionType.CHANGE_FAVORITE_STATUS, (card) => ({
  payload: card
}));

export const changeFavoriteFlag = createAction(ActionType.CHANGE_FAVORITE_FLAG);

export const clearCurrentOffer = createAction(ActionType.CLEAR_CURRENT_STATE);
