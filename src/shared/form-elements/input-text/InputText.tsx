import * as React from 'react';

export const InputText: React.FC = () => {
    const [componentName, setComponentName] = React.useState('InputText');
    return (
        <div>{componentName} works!</div>
    );
};

// InputText.defaultProps = undefined;
