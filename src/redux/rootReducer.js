import { combineReducers } from 'redux';
import chartReducer from './reducers/chart.reducer';
import authReducer from './reducers/auth.reducer';

export const rootReducer = combineReducers({
    chart: chartReducer,
    auth: authReducer
});
