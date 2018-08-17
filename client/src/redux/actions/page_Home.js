import {
  PAGE_GETDATA_SUCCESS,
  PAGE_GETDATA_REQUEST,
  PAGE_GETDATA_FAILURE,
} from '../constants';

import { HOME, SERVICES, PRODUCTS } from '../constants/prefix';

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

export const pageProductsDataRequest = () => {
  return {
    type: `${PRODUCTS}_${PAGE_GETDATA_REQUEST}`,
  };
};

export const pageProductsDataSuccess = (data) => {
  return {
    type: `${PRODUCTS}_${PAGE_GETDATA_SUCCESS}`,
    payload: data,
  };
};

export const pageProductsDataFailure = () => {
  return {
    type: `${PRODUCTS}_${PAGE_GETDATA_FAILURE}`,
  };
};
