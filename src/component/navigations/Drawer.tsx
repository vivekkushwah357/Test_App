import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import AuthStack from './AuthStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../../component/CustomDrawer/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation  = () => {
const { userToken, userDetails }: any = useContext(AuthContext)
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                width: "80%"
            },
            swipeEnabled: false
        }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name='AuthStack' component={AuthStack} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation 