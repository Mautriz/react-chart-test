import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, auth, ...rest }) => (
    // rest rappresenta tutti i props dati alla PrivateRoute esclusi auth e children (componente da renderizzare)
    <Route
        {...rest}
        // La funzione render ritorna o un nuovo componente o un redirect al login in caso l'utente non sia loggato
        render={({ location }) =>
            auth.isAuthenticated ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                />
            )
        }
    />
);

const mapStateToProps = ({ auth }) => ({
    auth
});

export default connect(mapStateToProps)(PrivateRoute);
