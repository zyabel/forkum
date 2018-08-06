import {
  PAGE_HOME_GETDATA_FAILURE,
  PAGE_HOME_GETDATA_REQUEST,
  PAGE_HOME_GETDATA_SUCCESS,
} from '../constants';

export const homePageDataFail = () => ({
  type: PAGE_HOME_GETDATA_FAILURE,
});

export const homePageDataStart = () => ({
  type: PAGE_HOME_GETDATA_REQUEST,
});

export const homePageDataEnd = (data) => ({
  type: PAGE_HOME_GETDATA_SUCCESS,
  payload: data,
});
