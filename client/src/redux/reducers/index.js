import { combineReducers } from 'redux';

import pageHome from './page_Home';
import pageServices from './page_Services';
import pageProducts from './page_Products';
import init from './init';

const rootReducer = combineReducers({
  pageHome,
  pageServices,
  pageProducts,
  init,
});

export default rootReducer;
