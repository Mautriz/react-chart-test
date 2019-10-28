import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartLoadJson from '../chart-load-json/chart-load-json.component';
import ChartLabelsForm from '../chart-labels-form/chart-labels-form.component';

class LoadDataForm extends Component {
    state = {
        selectors: {
            xAxesField: '',
            yAxesField: ''
        },
        chartValues: {}
    };

    setFormField = (field, data) => {
        this.setState({ [field]: data }, () => console.log(this.state));
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
            >
                <ChartLoadJson setFormField={this.setFormField} />
                <ChartLabelsForm setFormField={this.setFormField} />
                <button style={{ gridColumn: '1 / 3' }} type="submit">
                    LOAD DATA
                </button>
            </form>
        );
    }
}

export default connect(null)(LoadDataForm);
