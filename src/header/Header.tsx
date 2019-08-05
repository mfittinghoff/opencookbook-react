import * as React from 'react';
import { HeaderActions } from './header-actions/HeaderActions';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <header>
            <Link to={'/'}>
                <h1>opencookbook</h1>
            </Link>
            <HeaderActions/>
        </header>
    );
};
