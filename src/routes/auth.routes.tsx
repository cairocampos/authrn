import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {SignIn} from '../pages/SignIn';

const AuthStack = createStackNavigator();

export function AuthRoutes(): JSX.Element {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
}
