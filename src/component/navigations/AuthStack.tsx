import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { strings } from '../../utils/strings';
import Login from '../../screens/Login';
import WelcomeScreen from '../../screens/Welcome';
import Registration from '../../screens/Registration';
import BottomTabs from './BottomTab';
import ExploreScreen from '../../screens/ExploreScreen';
import FilterScreen from '../../screens/FilterScreen';
import JobDetails from '../../screens/JobDetails';
import ForgetPasswordScreen from '../../screens/ForgetScreen';
import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../style';
import MessageScreen from '../../screens/Message';
import EditPersonaldetails from '../../screens/Message/EditPersonaldetails';
import { AuthContext } from '../auth/AuthContext';
import { enableScreens } from 'react-native-screens';
import Notification from '../../screens/Notification';
// import DemoScreen from '../../screens/demo/DemoScreen';
const Stack = createNativeStackNavigator();
enableScreens()
const AuthStack = () => {
  const { userToken }: any = useContext(AuthContext)
  console.log(userToken, 'userToken')
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName={userToken ? strings.BOTTOM_TAB : strings.BOTTOM_TAB}
    >
      {
        userToken == null ? (
          <>
            <Stack.Screen name={strings.LOGIN} component={Login} />
            <Stack.Screen name={strings.REGISTRATION} component={Registration} />
            <Stack.Screen
              name={"ForgetPassword"}
              component={ForgetPasswordScreen}
            />
                        <Stack.Screen name={strings.BOTTOM_TAB} component={BottomTabs} />
                        {/* <Stack.Screen name={"Demo"} component={DemoScreen} /> */}


          </>
        ) : (
          <>
                      {/* <Stack.Screen name={"Demo"} component={DemoScreen} /> */}

            <Stack.Screen name={"JobDetails"} component={JobDetails} />
            <Stack.Screen
              name={"ProfileDetails"}
              component={MessageScreen}
            />
            <Stack.Screen
              name={"EditPersonaldetails"}
              component={EditPersonaldetails}
            />
            <Stack.Screen
              name={"Notification"}
              component={Notification}
            />
          </>
        )}

    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({


})

export default AuthStack;
