import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import IncomeScreen from '../screens/IncomeScreen';
import ExpenseScreen from '../screens/ExpenseScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-apps${focused ? '' : '-outline'}`
          : 'md-apps'
      }
    />
  ),
};

HomeStack.path = '';

const IncomeStack = createStackNavigator(
  {
    Income: IncomeScreen,
  },
  config
);

IncomeStack.navigationOptions = {
  tabBarLabel: 'Income',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-stats' : 'md-stats'} />
  ),
};

IncomeStack.path = '';

const ExpenseStack = createStackNavigator(
  {
    Expense: ExpenseScreen,
  },
  config
);

ExpenseStack.navigationOptions = {
  tabBarLabel: 'Expenses',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-trending-down' : 'md-trending-down'} />
  ),
};

ExpenseStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  IncomeStack,
  ExpenseStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
