import React from 'react';
import ChartLabelsForm from '../../components/chart-labels-form/chart-labels-form.component';
import ChartLoadJson from '../../components/chart-load-json/chart-load-json.component';
import LineChart from '../../components/line-chart/line-chart.component';

const HomePage = () => {
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <ChartLoadJson />
                <ChartLabelsForm />
            </div>
            <LineChart />
        </div>
    );
};

export default HomePage;
