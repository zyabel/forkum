import {
  PAGE_SERVICES_GETDATA_SUCCESS,
  PAGE_SERVICES_GETDATA_REQUEST,
  PAGE_SERVICES_GETDATA_FAILURE,
} from '../constants';

export const pageServicesDataSuccess = (data) => {
  return {
    type: PAGE_SERVICES_GETDATA_SUCCESS,
    payload: data,
  };
};

export const pageServicesDataRequest = () => {
  return {
    type: PAGE_SERVICES_GETDATA_REQUEST,
  };
};

export const pageServicesDataFailure = () => {
  return {
    type: PAGE_SERVICES_GETDATA_FAILURE,
  };
};
