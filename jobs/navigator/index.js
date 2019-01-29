import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import React from 'react';

import AuthScreen from '../screens/AuthScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReviewScreen from '../screens/ReviewScreen';

export default createBottomTabNavigator(
  {
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: createBottomTabNavigator(
        {
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: createStackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen },
            }),
            navigationOptions: {
              title: 'Job Reviews',
              tabBarIcon: ({ tintColor }) => <Icon name="favorite" size={30} color={tintColor} />,
            },
          },
        },
        {
          tabBarOptions: {
            labelStyle: {
              fontSize: 12,
            },
          },
        }
      ),
    },
  },
  {
    navigationOptions: {
      tabBarVisible: false,
    },
    lazyLoad: true,
  }
);
