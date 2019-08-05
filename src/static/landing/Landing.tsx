import * as React from 'react';
import { Link } from 'react-router-dom';

export const Landing: React.FC = () => {
    return (
        <div className="front-page-container v-container-40">
            <h2>Managing your recipes made easy</h2>
            <p>
                With opencookbook, you can create your own recipes and access them on any device,
                or you can let yourself be inspired by the recipes of other users.
            </p>
            <p>
                Just <Link to={'/signup'}>sign up</Link> for free and get started immediately.
            </p>
        </div>
    );
};
