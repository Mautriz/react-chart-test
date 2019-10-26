import { combineReducers } from 'redux';
import chartReducer from './reducers/chart.reducer';

export const rootReducer = combineReducers({
    chart: chartReducer
});
