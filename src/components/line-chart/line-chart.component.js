import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { generateChartData } from './chartOptions';
class LineChart extends Component {
    render() {
        const newChartData = generateChartData(this.props.chart);
        return <Line {...newChartData} />;
    }
}

const mapStateToProps = ({ chart }) => ({
    chart
});

export default connect(mapStateToProps)(LineChart);
