import { CHANGE_LANGUAGE } from "../ActionTypes";

export const LanguageReducers = (state = 'English', action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
