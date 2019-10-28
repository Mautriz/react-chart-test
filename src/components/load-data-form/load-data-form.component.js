import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartLoadJson from '../chart-load-json/chart-load-json.component';
import ChartLabelsForm from '../chart-labels-form';

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
            <form onSubmit={this.handleSubmit}>
                <ChartLoadJson setFormField={this.setFormField} />
                <ChartLabelsForm setFormField={this.setFormField} />
                <button type="submit">LOAD DATA</button>
            </form>
        );
    }
}

export default connect(null)(LoadDataForm);
