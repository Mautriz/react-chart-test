import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartLoadJson from '../chart-load-json/chart-load-json.component';
import ChartLabelsForm from '../chart-labels-form/chart-labels-form.component';
import {
    // chartUpdateAxesFields,
    // chartUpdateChartData,
    chartUpdateChart
} from '../../redux/actions/chart.actions';

// Questo approach è abbastanza più complesso, normalmente con una libreria e un solo componente si sarebbe risolto tutto facilmente
class LoadDataForm extends Component {
    state = {
        selectors: {
            xAxesField: '',
            yAxesField: '',
            xAxesFieldError: false,
            yAxesFieldError: false,
            xAxesFieldTouched: false,
            yAxesFieldTouched: false
        },
        chartValues: []
    };

    // funzione da passare ai componenti figli per settare lo state del parent (questo componente)
    setFormField = (stateField, data, nestedField) => {
        let newField;
        // controlla se il valore è nestato, e cambia lo stato di conseguenza
        if (nestedField) {
            newField = this.state[stateField];
            newField[nestedField] = data;
        } else {
            newField = data;
        }
        this.setState({ [stateField]: newField }, () => {
            this.isFieldValid(stateField, nestedField);
        });
    };

    // dispatcha le azioni di redux per raggiornare il grafico con i nuovi dati
    handleSubmit = e => {
        e.preventDefault();
        const { xAxesField, yAxesField } = this.state.selectors;
        const payload = {
            chartData: this.state.chartValues,
            axes: {
                xAxesField,
                yAxesField
            }
        };
        this.props.chartUpdateChart(payload);
        // this.props.chartUpdateAxesFields({
        //     xAxesField,
        //     yAxesField
        // });
        // this.props.chartUpdateChartData(this.state.chartValues);
    };

    handleBlur = (stateField, nestedField) => {
        // I nomi nello stato devono avere la prima parte in comune per poter fare questo
        // prende il field in base al nome dato all'input attraverso tag (name="") + Touched alla fine
        const nestedFieldTouched = `${nestedField}Touched`;
        const newField = { ...this.state[stateField] };
        newField[nestedFieldTouched] = true;
        this.setState({ [stateField]: newField }, () => {
            this.isFieldValid(stateField, nestedField);
        });
    };

    // controllo per input nestati, eventualmente scalabile
    isFieldValid = (stateField, nestedField) => {
        if (!nestedField) {
            return;
        }
        const newField = { ...this.state[stateField] };
        // controlla se il valore esiste ed è stato toccato, se si, manda errore
        if (
            !this.state[stateField][nestedField] &&
            this.state[stateField][`${nestedField}Touched`]
        ) {
            newField[`${nestedField}Error`] = true;
            this.setState({
                [stateField]: newField
            });
        } else {
            newField[`${nestedField}Error`] = false;
            this.setState({
                [stateField]: newField
            });
        }
    };

    // semplice controllo sull'esistenza dei valori necessari
    isFormValid = () => {
        const { xAxesField, yAxesField } = this.state.selectors;
        return xAxesField && yAxesField;
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
            >
                <ChartLoadJson setFormField={this.setFormField} />
                <ChartLabelsForm
                    setFormField={this.setFormField}
                    xAxesField={this.state.selectors.xAxesField}
                    yAxesField={this.state.selectors.yAxesField}
                    xAxesFieldError={this.state.selectors.xAxesFieldError}
                    yAxesFieldError={this.state.selectors.yAxesFieldError}
                    handleBlur={this.handleBlur}
                />
                <button
                    style={{ gridColumn: '1 / 3' }}
                    type="submit"
                    disabled={!this.isFormValid()}
                >
                    LOAD DATA
                </button>
                <p style={{ color: 'red', margin: 'auto' }}>
                    {this.props.chart.error && this.props.chart.error}
                </p>
            </form>
        );
    }
}

const mapStateToProps = ({ chart }) => ({
    chart
});
export default connect(
    mapStateToProps,
    { /* chartUpdateAxesFields, chartUpdateChartData */ chartUpdateChart }
)(LoadDataForm);
