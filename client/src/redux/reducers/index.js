import { combineReducers } from 'redux';

import pageHome from './page_Home';
import pageServices from './page_Services';

const rootReducer = combineReducers({
  pageHome,
  pageServices,
});

export default rootReducer;
