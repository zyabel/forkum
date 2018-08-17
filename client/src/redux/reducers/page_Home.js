import { PAGE_GETDATA_SUCCESS, PAGE_GETDATA_FAILURE } from '../constants';

import { HOME } from '../constants/prefix';

const initialState = {
  data: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${HOME}_${PAGE_GETDATA_SUCCESS}`:
      return {
        ...state,
        data: action.payload,
      };

    case `${HOME}_${PAGE_GETDATA_FAILURE}`:
      return { ...state, error: true };

    default:
      return state;
  }
};
