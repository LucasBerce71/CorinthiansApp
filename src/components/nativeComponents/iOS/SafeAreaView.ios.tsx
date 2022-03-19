import React, { memo } from 'react';

import { SafeAreaView as SafeAreaViewIOS } from 'react-native';

const SafeAreaView: React.FC = ({ children, ...rest }) => {
    return (
        <SafeAreaViewIOS {...rest}>
            {children}
        </SafeAreaViewIOS>  
    );
};

export default memo(SafeAreaView);