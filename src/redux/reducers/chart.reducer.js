import { chartTypes } from '../types/chart.types';

const initialState = {
    values: {
        labels: [],
        data: [],
        color: 'yellow',
        title: 'placeholder title'
    },
    labels: {
        xAxesLabel: 'placeholder xaxes',
        yAxesLabel: 'placeholder yaxes'
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case chartTypes.UPDATE_LABELS:
            return { ...state, labels: { ...state.labels, ...payload } };
        case chartTypes.UPDATE_VALUES:
            return { ...state, values: { ...state.values, ...payload } };
        default:
            return state;
    }
};
