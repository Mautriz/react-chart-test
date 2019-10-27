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
            // il lavoro del reducer è quello di prendere dati e aggiornare lo stato globale,
            // operazioni "importanti" vanno in altri file per avere un codice clean ed esplicativo
            const chartData = validateJsonEntry(payload, state.axesFields);
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
