import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Header from '../components/Header';

import Home from '../pages/Home';
import Topics from '../pages/Topics';
import Subtopics from '../pages/Subtopics';
import Learning from '../pages/Learning';
import Questions from '../pages/Questions';
import Result from '../pages/Result';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          header: () => <Header />,
          headerShown: true,
          headerTransparent: true,
          animationEnabled: true,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Topics" component={Topics} />
        <AppStack.Screen name="Subtopics" component={Subtopics} />
        <AppStack.Screen
          name="Learning"
          component={Learning}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Questions"
          component={Questions}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Result"
          component={Result}
          options={{ headerShown: false }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
