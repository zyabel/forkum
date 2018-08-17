export const GETDATA_REQUEST = 'GETDATA_REQUEST';
export const GETDATA_SUCCESS = 'GETDATA_SUCCESS';
export const GETDATA_FAILURE = 'GETDATA_FAILURE';

export const getDataRequest = () => {
  return {
    type: GETDATA_REQUEST,
  };
};

export const getDataSuccess = (data) => {
  return {
    type: GETDATA_SUCCESS,
    payload: data,
  };
};

export const getDataFailure = () => {
  return {
    type: GETDATA_FAILURE,
  };
};
