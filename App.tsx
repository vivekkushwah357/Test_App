import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {strings} from './src/utils/strings';
import {COLORS} from './src/style';
import HomeScreen from './src/screens/HomeScreen';
import {EmailIcon, HomeIcon} from './src/assets/svgImg/SvgImg';
import Prefrence from './src/screens/Prefrence';
import ProfileScreen from './src/screens/Profile';
import {width} from './src/style/typography';
import SearchScreen from './src/screens/Search';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={strings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: COLORS.white,
          height: 70,
          paddingBottom: 10,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name={strings.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeIcon,
                  {backgroundColor: COLORS.white},
                ]}>
                <HomeIcon
                  active={focused}
                  fill={focused ? 'darkgreen' : 'lightgray'}
                />
                {focused && <View style={styles.activeLine} />}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name={strings.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeIcon,
                  {backgroundColor: COLORS.white},
                ]}>
                <HomeIcon
                  active={focused}
                  fill={focused ? 'darkgreen' : 'lightgray'}
                />
                {focused && <View style={styles.activeLine} />}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name={'Prefrence'}
        component={Prefrence}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeIcon,
                  {backgroundColor: COLORS.white},
                ]}>
                <EmailIcon
                  active={focused}
                  fill={focused ? 'darkgreen' : 'lightgray'}
                />
                {focused && <View style={styles.activeLine} />}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name={strings.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeIcon,
                  {backgroundColor: COLORS.white},
                ]}>
                <HomeIcon
                  active={focused}
                  fill={focused ? 'darkgreen' : 'lightgray'}
                />
                {focused && <View style={styles.activeLine} />}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: width / 4,
    height: Platform.OS === 'ios' ? 85 : 50,
    marginTop: 19,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIcon: {
    backgroundColor: 'red',
  },
  activeLine: {
    position: 'absolute',
    top: 0,
    width: '30%',
    height: 4,
    backgroundColor: 'darkgreen',
  },
});

export default BottomTabs;
