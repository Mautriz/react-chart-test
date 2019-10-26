import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chartUpdateValues } from '../../redux/actions/chart.actions';
import './chart-load-json.scss';

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
            <form className="json-form" onSubmit={this.handleSubmit}>
                <textarea
                    className="json-form__textarea"
                    onChange={this.handleChange}
                    name="jsonData"
                ></textarea>
                <button className="json-form__button" type="submit">
                    LOAD JSON
                </button>
            </form>
        );
    }
}

export default connect(
    null,
    { chartUpdateValues }
)(ChartLoadJson);
