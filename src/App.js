import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import NotFoundPage from './pages/not-found/not-found.component';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route path="/">
                    <NotFoundPage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
