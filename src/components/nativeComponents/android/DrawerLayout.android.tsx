import React, { memo } from 'react';
import { DrawerLayoutAndroidComponent } from 'react-native';

interface IAndroidDrawerLayout {
    renderNavigationView: any;
}

const DrawerLayout: React.FC<IAndroidDrawerLayout> = ({ 
    children,
    renderNavigationView 
}) => {
    return (
        <DrawerLayoutAndroidComponent 
            renderNavigationView={renderNavigationView}
        >
            {children}
        </DrawerLayoutAndroidComponent>
    );
};

export default memo(DrawerLayout);