import { chartTypes } from '../types/chart.types';

export const chartUpdateAxesFields = payload => ({
    type: chartTypes.UPDATE_AXES_FIELDS,
    payload
});

export const chartUpdateChartData = payload => ({
    type: chartTypes.UPDATE_CHART_DATA,
    payload
});

export const chartUpdateChart = payload => ({
    type: chartTypes.UPDATE_CHART,
    payload
});
