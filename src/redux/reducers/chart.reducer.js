import { chartTypes } from '../types/chart.types';
import { validateJsonEntry } from '../utils/validateJsonEntry';
const initialState = {
    axesFields: {
        xAxesField: '',
        yAxesField: ''
    },
    chartData: {
        data: [],
        labels: []
    }
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case chartTypes.UPDATE_AXES_FIELDS:
            return { ...state, axesFields: payload };
        case chartTypes.UPDATE_CHART_DATA:
            const chartData = validateJsonEntry(
                payload.jsonData,
                state.axesFields
            );
            if (!chartData) {
                return {
                    ...state,
                    error: 'Json invalido'
                };
            }
            return { ...state, chartData, error: null };
        default:
            return state;
    }
};
