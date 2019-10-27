import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <h2>Page not found</h2>
                <Link to="/">Go back</Link>
            </div>
        );
    }
}

export default withRouter(NotFoundPage);
