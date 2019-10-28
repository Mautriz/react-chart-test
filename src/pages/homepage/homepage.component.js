import React from 'react';
import LineChart from '../../components/line-chart/line-chart.component';
import { authLogout } from '../../redux/actions/auth.actions';
import { connect } from 'react-redux';
import loadDataFormComponent from '../../components/load-data-form/load-data-form.component';

const HomePage = ({ authLogout }) => {
    // le pagine hanno il ruolo di mostrare altri componenti sulla pagina, non dovrebbero avere logica particolarmente complessa
    return (
        <div>
            <loadDataFormComponent />
            {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <ChartLoadJson />
                <ChartLabelsForm />
            </div> */}
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
