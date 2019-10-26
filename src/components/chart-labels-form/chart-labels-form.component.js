import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chartUpdateLabels } from '../../redux/actions/chart.actions';

// Normalmente per i form userei una libreria (Formik), uso vanilla per far vedere che so come funziona
class ChartLabelsForm extends Component {
    state = {
        xAxesLabel: '',
        yAxesLabel: '',
        xAxesLabelTouched: false,
        yAxesLabelTouched: false,
        isFormValid: true
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleBlur = e => {
        const statePiece = `${e.target.name}Touched`;
        this.setState({ [statePiece]: true });
    };

    handleSubmit = e => {
        const { xAxesLabel, yAxesLabel } = this.state;
        e.preventDefault();
        if (this.state.isFormValid) {
            this.props.chartUpdateLabels({
                xAxesLabel,
                yAxesLabel
            });
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="xAxesLabel">xAxes</label>
                <input
                    type="text"
                    name="xAxesLabel"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                ></input>
                <label htmlFor="xAxesLabel">xAxes</label>
                <input
                    type="text"
                    name="yAxesLabel"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                ></input>
                <button type="submit">SET LABELS</button>
            </form>
        );
    }
}

export default connect(
    null,
    { chartUpdateLabels }
)(ChartLabelsForm);
