import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartLoadJson from '../chart-load-json/chart-load-json.component';
import ChartLabelsForm from '../chart-labels-form/chart-labels-form.component';
import {
    chartUpdateAxesFields,
    chartUpdateChartData
} from '../../redux/actions/chart.actions';

// Questo approach è abbastanza più complesso, normalmente con una libreria e un solo componente si sarebbe risolto tutto facilmente
class LoadDataForm extends Component {
    state = {
        selectors: {
            xAxesField: '',
            yAxesField: ''
        },
        chartValues: {}
    };

    // funzione da passare ai componenti figli per settare lo state del parent (questo componente)
    setFormField = (field, data) => {
        this.setState({ [field]: data });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.chartUpdateAxesFields(this.state.selectors);
        this.props.chartUpdateChartData(this.state.chartValues);
    };

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
                <ChartLabelsForm setFormField={this.setFormField} />
                <button
                    style={{ gridColumn: '1 / 3' }}
                    type="submit"
                    disabled={!this.isFormValid()}
                >
                    LOAD DATA
                </button>
            </form>
        );
    }
}

export default connect(
    null,
    { chartUpdateAxesFields, chartUpdateChartData }
)(LoadDataForm);
