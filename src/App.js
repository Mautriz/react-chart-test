import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import NotFoundPage from './pages/not-found/not-found.component';
import PrivateRoute from './components/private-route/private-route.component';
import LoginPage from './pages/login/login.component';

function App() {
    return (
        <div>
            {/*  Lo switch lascia attivare una sola route, 
            se nessuna delle precedenti si attiva, la not found ci sarà sempre
            perché non richiede un path "exact" */}
            <Switch>
                <PrivateRoute exact path="/">
                    <HomePage />
                </PrivateRoute>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route path="/">
                    <NotFoundPage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
