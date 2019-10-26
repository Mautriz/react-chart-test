import { chartTypes } from '../types/chart.types';

const initialState = {
    values: {
        prova: 1
    },
    labels: {}
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case chartTypes.UPDATE_LABELS:
            return { ...state, ...payload };
        case chartTypes.UPDATE_VALUES:
            return state;
        default:
            return state;
    }
};
