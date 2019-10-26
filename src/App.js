import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App({ chart }) {
    console.log(chart);
    return <div className="App">Test</div>;
}

const mapStateToProps = ({ chart }) => ({
    chart
});

export default connect(mapStateToProps)(App);
