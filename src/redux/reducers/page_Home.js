import {
  PAGE_HOME_GETDATA_SUCCESS,
  PAGE_HOME_GETDATA_FAILURE,
} from '../constants';

const initialState = {
  data: null,
  spinner: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_HOME_GETDATA_SUCCESS:
      return { ...state, data: action.payload };

    case PAGE_HOME_GETDATA_FAILURE:
      return { ...state, error: true };

    default:
      return state;
  }
};
