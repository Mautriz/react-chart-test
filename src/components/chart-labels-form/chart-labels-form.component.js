import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chartUpdateLabels } from '../../redux/actions/chart.actions';

// Normalmente per i form userei una libreria (Formik), uso vanilla per far vedere che so come funziona
class ChartLabelsForm extends Component {
    state = {
        xAxesLabel: '',
        yAxesLabel: '',
        xAxesLabelError: false,
        yAxesLabelError: false,
        xAxesLabelTouched: false,
        yAxesLabelTouched: false
    };

    errorMessage = 'This field is required';

    // changes corresponding input state and validates the field
    handleChange = e => {
        const controlName = e.target.name;
        this.setState({ [controlName]: e.target.value }, () => {
            this.isFieldValid(controlName);
        });
    };

    // marks field as touched
    handleBlur = e => {
        const controlName = e.target.name;
        const statePiece = `${controlName}Touched`;
        this.setState({ [statePiece]: true }, () => {
            this.isFieldValid(controlName);
        });
    };

    // submits form only if its valid
    handleSubmit = e => {
        const { xAxesLabel, yAxesLabel } = this.state;
        e.preventDefault();
        this.props.chartUpdateLabels({
            xAxesLabel,
            yAxesLabel
        });
    };

    // checks if single form value is valid
    isFieldValid = field => {
        if (!this.state[field] && this.state[`${field}Touched`]) {
            return this.setState({
                [`${field}Error`]: true
            });
        }
        this.setState({ [`${field}Error`]: false });
    };

    isFormValid = () => this.state.xAxesLabel && this.state.yAxesLabel;

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px'
                }}
            >
                <div style={{ flex: 1 }}>
                    <label htmlFor="xAxesLabel">xAxes</label>
                    <input
                        style={{ width: '100%' }}
                        value={this.state.xAxesLabel}
                        type="text"
                        name="xAxesLabel"
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    ></input>

                    {this.state.xAxesLabelError && (
                        <p style={{ color: 'red' }}>
                            xAxes è un field richiesto
                        </p>
                    )}
                </div>
                <div style={{ flex: 1 }}>
                    <label htmlFor="xAxesLabel">xAxes</label>
                    <input
                        style={{ width: '100%' }}
                        value={this.state.yAxesLabel}
                        type="text"
                        name="yAxesLabel"
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    ></input>
                    {this.state.yAxesLabelError && (
                        <p style={{ color: 'red' }}>
                            yAxes è un field richiesto
                        </p>
                    )}
                </div>
                <button disabled={!this.isFormValid()} type="submit">
                    SET LABELS
                </button>
            </form>
        );
    }
}

export default connect(
    null,
    { chartUpdateLabels }
)(ChartLabelsForm);
