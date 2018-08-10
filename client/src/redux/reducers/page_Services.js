import {
  PAGE_SERVICES_GETDATA_SUCCESS,
  PAGE_SERVICES_GETDATA_FAILURE,
} from '../constants';

const initialState = {
  data: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_SERVICES_GETDATA_SUCCESS:
      return { ...state, data: action.payload };

    case PAGE_SERVICES_GETDATA_FAILURE:
      return { ...state, error: true };

    default:
      return state;
  }
};
