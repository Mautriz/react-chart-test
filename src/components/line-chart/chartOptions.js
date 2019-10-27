export const generateChartData = ({ data, labels }) => {
    return {
        data: {
            labels: labels ? labels : [],
            datasets: [
                {
                    data: data ? data : [],
                    backgroundColor: 'yellow',
                    label: 'titolo non pervenuto',
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
                            labelString: 'Label X!',
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
                            labelString: 'Label Y',
                            fontSize: 20
                        }
                    }
                ]
            }
        }
    };
};
