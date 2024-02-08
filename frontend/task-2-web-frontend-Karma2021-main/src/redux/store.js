import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { alertsReducer } from './reducers/alert_Reducer';
import { serviceReducer } from './reducers/service_Reducer';
import { bookingsReducer } from './reducers/booking_reducer';

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  serviceReducer,
  alertsReducer,
  bookingsReducer,
});

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
