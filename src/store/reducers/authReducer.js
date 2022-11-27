import * as ACTION_TYPES from "../actions/actionTypes";

export const initialState = {
  isAuthenticated: false,
  dbProfile: null,
  authProfile: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
      };
    case ACTION_TYPES.SET_PROFILE:
      return {
        ...state,
        authProfile: action.payload,
      };
    case ACTION_TYPES.REMOVE_PROFILE:
      return {
        ...state,
        authProfile: null,
      };
    case ACTION_TYPES.SET_DB_PROFILE:
      return {
        ...state,
        dbProfile: action.payload,
      };
    case ACTION_TYPES.REMOVE_DB_PROFILE:
      return {
        ...state,
        dbProfile: null,
      };
    default:
      return state;
  }
};
