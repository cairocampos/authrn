import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '../pages/Dashboard';

const AppStack = createStackNavigator();

export function AppRoutes(): JSX.Element {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Dashboard" component={Dashboard} />
    </AppStack.Navigator>
  );
}
