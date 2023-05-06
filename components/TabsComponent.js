import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../pages/HomeScreen';
import MenuScreen from '../pages/MenuScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
);

export default MyTabs;

