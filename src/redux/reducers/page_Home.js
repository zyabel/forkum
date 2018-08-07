import { Slides } from '../../containers/HomePage/data';
import {
  PAGE_HOME_GETDATA_SUCCESS,
  PAGE_HOME_GETDATA_REQUEST,
  PAGE_HOME_GETDATA_FAILURE,
} from '../constants';

const initialState = {
  data: null,
  spinner: false,
  error: false,
};

const data = Slides;

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_HOME_GETDATA_SUCCESS:
      return { ...state, data: data };

    case PAGE_HOME_GETDATA_REQUEST:
      return { ...state, spinner: true };

    case PAGE_HOME_GETDATA_FAILURE:
      return { ...state, error: true };

    default:
      return state;
  }
};
