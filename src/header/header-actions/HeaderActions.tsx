import * as React from 'react';
import { Button } from '../../shared/controls/Button';

export const HeaderActions: React.FC = () => {
    return (
        <Button
            label={'Login'}
            action={() => alert('Clicked')}
        />
    );
};
