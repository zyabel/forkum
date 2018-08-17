import { PAGE_GETDATA_SUCCESS, PAGE_GETDATA_FAILURE } from '../constants';

import { PRODUCTS } from '../constants/prefix';

const initialState = {
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${PRODUCTS}_${PAGE_GETDATA_SUCCESS}`:
      return {
        ...state,
        cards: action.payload,
      };

    case `${PRODUCTS}_${PAGE_GETDATA_FAILURE}`:
      return { ...state, error: true };

    default:
      return state;
  }
};
