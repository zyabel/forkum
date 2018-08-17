import { GETDATA_SUCCESS, GETDATA_FAILURE } from '../actions';

const initialState = {
  data: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETDATA_SUCCESS:
      return { ...state, data: action.payload };

    case GETDATA_FAILURE:
      return { ...state, error: true };

    default:
      return state;
  }
};
