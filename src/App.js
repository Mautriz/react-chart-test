import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import NotFoundPage from './pages/not-found/not-found.component';
import PrivateRoute from './components/private-route/private-route.component';
import LoginPage from './pages/login/login.component';

function App() {
    return (
        <div>
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
