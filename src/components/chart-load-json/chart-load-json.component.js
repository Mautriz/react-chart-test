import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chartUpdateValues } from '../../redux/actions/chart.actions';
import './chart-load-json.scss';

class ChartLoadJson extends Component {
    state = {
        chartValues: {}
    };

    // sets state field to parsed value
    handleChange = e => {
        const chartValues = this.parseJsonValidation(e.target.value);
        this.setState({ chartValues });
    };

    // sends the json to redus => the graph
    handleSubmit = e => {
        e.preventDefault();
        this.props.chartUpdateValues(this.state.chartValues);
    };

    // parses json, return empty object if json is invalid
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
                <p>
                    Data shape: values.data must be same length as labels.data
                </p>
                <pre>{`values: {
        labels: string[],
        data: number[],
        color: string,
        title: string
    } `}</pre>
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
