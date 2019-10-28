import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { generateChartData } from './chartOptions';
class LineChart extends Component {
    render() {
        // genera le opzioni necessarie per il grafico e gliele passa come props, la libreria usa i props per le impostazioni del grafico.
        const newChartData = generateChartData(this.props.chart.chartData);
        return <Line {...newChartData} />;
    }
}

const mapStateToProps = ({ chart }) => ({
    chart
});

export default connect(mapStateToProps)(LineChart);
