import React from 'react';
import { authLogin } from '../../redux/actions/auth.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const LoginPage = ({ authLogin, history }) => {
    // simula richiesta al server con 300ms di ritardo
    const login = () => {
        authLogin();
        setTimeout(() => {
            history.push('/');
        }, 300);
    };
    return (
        <div>
            <p>Login page</p>
            <button onClick={login}>LOGIN!</button>
        </div>
    );
};
// withRouter da accesso al router e a tutte le sue funzioni
export default withRouter(
    connect(
        null,
        {
            authLogin
        }
    )(LoginPage)
);
