import { chartTypes } from '../types/chart.types';

export const chartUpdateValues = payload => ({
    type: chartTypes.UPDATE_VALUES,
    payload
});

export const chartUpdateLabels = payload => ({
    type: chartTypes.UPDATE_LABELS,
    payload
});
