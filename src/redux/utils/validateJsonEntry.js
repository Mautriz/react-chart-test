export const validateJsonEntry = (json, axesFields) => {
    if (!axesFields) return null;
    const { xAxesField, yAxesField } = axesFields;
    try {
        const parsedJson = JSON.parse(json);
        let newChartData = {
            data: [],
            labels: []
        };
        for (const item of parsedJson) {
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
