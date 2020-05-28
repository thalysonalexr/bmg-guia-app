import React from 'react';
import { NavigationContainer, Route } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
