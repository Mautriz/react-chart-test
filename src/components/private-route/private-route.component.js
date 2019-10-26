import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, auth, ...rest }) => (
    <Route
        {...rest}
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
