export const validateJsonEntry = (json, axesFields) => {
    if (!axesFields) return null;
    const { xAxesField, yAxesField } = axesFields;

    try {
        let newChartData = {
            data: [],
            labels: []
        };
        for (const item of json) {
            if (
                !item[xAxesField] ||
                !item[yAxesField] ||
                isNaN(+item[yAxesField])
            ) {
                return null;
            }
            newChartData.labels.push(item[xAxesField]);
            newChartData.data.push(+item[yAxesField]);
        }
        return newChartData;
    } catch (e) {
        return null;
    }
};
