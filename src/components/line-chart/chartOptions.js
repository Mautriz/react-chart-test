export const generateChartData = ({ values, labels }) => {
    return {
        data: {
            labels: values.labels ? values.labels : [],
            datasets: [
                {
                    data: values.data ? values.data : [],
                    backgroundColor: values.color ? values.color : 'yellow',
                    label: values.title ? values.title : 'titolo non pervenuto',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: labels.yAxesLabel
                                ? labels.yAxesLabel
                                : 'placeholder yAxes',
                            fontSize: 20
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ],
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: labels.xAxesLabel
                                ? labels.xAxesLabel
                                : 'placeholder xAxes',
                            fontSize: 20
                        }
                    }
                ]
            }
        }
    };
};
