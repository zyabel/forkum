import {
  PAGE_GETDATA_SUCCESS,
  PAGE_GETDATA_REQUEST,
  PAGE_GETDATA_FAILURE,
} from '../constants';

import { HOME, SERVICES } from '../constants/prefix';

export const pageHomeDataRequest = () => {
  return {
    type: `${HOME}_${PAGE_GETDATA_REQUEST}`,
  };
};

export const pageHomeDataSuccess = (data) => {
  return {
    type: `${HOME}_${PAGE_GETDATA_SUCCESS}`,
    payload: data,
  };
};

export const pageHomeDataFailure = () => {
  return {
    type: `${HOME}_${PAGE_GETDATA_FAILURE}`,
  };
};

export const pageServicesDataRequest = () => {
  return {
    type: `${SERVICES}_${PAGE_GETDATA_REQUEST}`,
  };
};

export const pageServicesDataSuccess = (data) => {
  return {
    type: `${SERVICES}_${PAGE_GETDATA_SUCCESS}`,
    payload: data,
  };
};

export const pageServicesDataFailure = () => {
  return {
    type: `${SERVICES}_${PAGE_GETDATA_FAILURE}`,
  };
};
