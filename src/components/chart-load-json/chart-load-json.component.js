import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chartUpdateValues } from '../../redux/actions/chart.actions';

class ChartLoadJson extends Component {
    state = {
        chartValues: {}
    };

    handleChange = e => {
        const chartValues = this.parseJsonValidation(e.target.value);
        this.setState({ chartValues });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.chartUpdateValues(this.state.chartValues);
    };

    parseJsonValidation = json => {
        try {
            return JSON.parse(json);
        } catch (e) {
            return {};
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea
                    onChange={this.handleChange}
                    name="jsonData"
                ></textarea>
                <button type="submit">LOAD JSON</button>
            </form>
        );
    }
}

export default connect(
    null,
    { chartUpdateValues }
)(ChartLoadJson);
