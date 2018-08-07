import {
  PAGE_HOME_GETDATA_SUCCESS,
  PAGE_HOME_GETDATA_REQUEST,
  PAGE_HOME_GETDATA_FAILURE,
} from '../constants';

export const pageHomeDataSuccess = (data) => {
  return {
    type: PAGE_HOME_GETDATA_SUCCESS,
    payload: data,
  };
};

export const pageHomeDataRequest = () => {
  return {
    type: PAGE_HOME_GETDATA_REQUEST,
  };
};

export const pageHomeDataFailure = () => {
  return {
    type: PAGE_HOME_GETDATA_FAILURE,
  };
};
