import React, { memo } from 'react';
import { InputAccessoryView as InputAccessoryViewIOS } from 'react-native';

const InputAccessoryView: React.FC = ({ children, ...rest }) => {
    return (
        <InputAccessoryViewIOS {...rest}>
            {children}
        </InputAccessoryViewIOS>
    );
};

export default memo(InputAccessoryView);