import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';

class LineChart extends Component {
    render() {
        const { values, labels } = this.props.chart;
        return <Line />;
    }
}

const mapStateToProps = ({ chart }) => ({
    chart
});

export default connect(mapStateToProps)(LineChart);
