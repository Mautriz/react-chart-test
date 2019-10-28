import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chartUpdateChartData } from '../../redux/actions/chart.actions';
import './chart-load-json.scss';

class ChartLoadJson extends Component {
    // state = {
    //     chartValues: {}
    // };

    // sets state field to parsed value
    handleChange = e => {
        const chartValues = this.parseJsonValidation(e.target.value);
        this.props.setFormField('chartValues', chartValues);
    };

    // sends the json to redus => the graph
    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.chartUpdateChartData(this.state.chartValues);
    // };

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
            <div className="json-form">
                {/* Esempio formattato */}
                <pre>{`Inserisci un array JSON con tutti oggetti con almeno 2 campi uguali, 
                questi campi devono essere scelti nei selettori a destra
                ex: AsseX: "marco", AsseY: "penna"
                [{"marco": "Gennaio", "penna":12},
                {"marco": "Febbraio", "penna":7},{"marco": "Marzo", "penna":18}]
                `}</pre>
                <textarea
                    className="json-form__textarea"
                    onChange={this.handleChange}
                    name="jsonData"
                ></textarea>
                {/* <button className="json-form__button" type="submit">
                    LOAD JSON
                </button> */}
            </div>
        );
    }
}

export default connect(
    null,
    { chartUpdateChartData }
)(ChartLoadJson);
