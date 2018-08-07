import {
  PAGE_HOME_GETDATA_SUCCESS,
  PAGE_HOME_GETDATA_REQUEST,
  PAGE_HOME_GETDATA_FAILURE,
} from '../constants';

export const pageHomeDataSuccess = (data) => ({
  type: PAGE_HOME_GETDATA_SUCCESS,
  payload: data,
});

export const pageHomeDataRequest = () => ({
  type: PAGE_HOME_GETDATA_REQUEST,
});

export const pageHomeDataFailure = () => ({
  type: PAGE_HOME_GETDATA_FAILURE,
});
