import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabsRoutes } from './BottomTabsRoutes';
import { Login } from '../Pages/Login';

export type ParametrosDaRota = {
  StackLogin: {name: string};
  StackTabsPages: {name: string};
}

const StackBatatinha = createNativeStackNavigator<ParametrosDaRota>();

export function StackRoutes() {

  return (
    <NavigationContainer>
      <StackBatatinha.Navigator screenOptions={{ headerShown: false }}>
        
        <StackBatatinha.Screen name="StackLogin" component={Login} />
        <StackBatatinha.Screen name="StackTabsPages" component={BottomTabsRoutes} />

      </StackBatatinha.Navigator>
    </NavigationContainer>
  )
}