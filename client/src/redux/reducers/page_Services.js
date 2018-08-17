import { PAGE_GETDATA_SUCCESS, PAGE_GETDATA_FAILURE } from '../constants';

import { SERVICES } from '../constants/prefix';

const initialState = {
  data: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${SERVICES}_${PAGE_GETDATA_SUCCESS}`:
      return {
        ...state,
        data: action.payload,
        links: action.payload.NAV_LINKS,
      };

    case `${SERVICES}_${PAGE_GETDATA_FAILURE}`:
      return { ...state, error: true };

    default:
      return state;
  }
};
