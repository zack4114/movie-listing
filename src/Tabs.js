import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MoviesTab from './Containers/Movies';
import SavedMoviesTab from './Containers/SavedMovies';
import {COLORS} from './Constants';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      tabBarOptions={{
        activeTintColor: '#FFF',
        inactiveBackgroundColor: COLORS.black,
        activeBackgroundColor: COLORS.black,
        labelStyle: {
          marginBottom: 5,
        },
        keyboardHidesTabBar: true,
        style: {
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Movies"
        component={MoviesTab}
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedMoviesTab}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
