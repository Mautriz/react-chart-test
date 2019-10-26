import React from 'react';
import ChartLabelsForm from '../../components/chart-labels-form/chart-labels-form.component';
import ChartLoadJson from '../../components/chart-load-json/chart-load-json.component';
import LineChart from '../../components/line-chart/line-chart.component';
import { authLogout } from '../../redux/actions/auth.actions';
import { connect } from 'react-redux';

const HomePage = ({ authLogout }) => {
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <ChartLoadJson />
                <ChartLabelsForm />
            </div>
            <LineChart />
            <button
                style={{ position: 'fixed', right: '15px', bottom: '15px' }}
                onClick={authLogout}
            >
                PRESS HERE TO LOGOUT
            </button>
        </div>
    );
};

export default connect(
    null,
    {
        authLogout
    }
)(HomePage);
