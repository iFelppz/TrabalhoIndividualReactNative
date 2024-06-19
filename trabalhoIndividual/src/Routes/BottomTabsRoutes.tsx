import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Pages/Home';
import { Profile } from '../Pages/Profile';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

const TabBatatinha = createBottomTabNavigator();

export function BottomTabsRoutes() {

  return (
    <TabBatatinha.Navigator
      screenOptions={{
        tabBarLabel: '',
        tabBarStyle: {
          backgroundColor: 'black',
          height: 70
        },

        headerBackground: () => (
          <View style={{
            flexDirection: 'row',
            marginTop: 30,
          }}>
            <Text style={{ fontSize: 25, color: 'white'}}>Bem vindo! </Text>
            <Icon name="home" color={'white'} size={35} />
          </View>
        ),
        headerBackgroundContainerStyle: {
          justifyContent: 'center',
          backgroundColor: 'black',
          alignItems: 'center'
        },
        title: ''
      }}

    >
      <TabBatatinha.Screen
        name='TabsHome'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
              <Icon name="home" size={20} color={focused ? "red" : '#fff'} />
              <Text style={{ fontSize: 15, color: focused ? "red" : '#fff' }}>Home</Text>
            </View>
          ),
        }}
      />

      <TabBatatinha.Screen
        name='TabsProfile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
              <Icon name="person" size={20} color={focused ? "red" : "#fff"} />
              <Text style={{ fontSize: 15, color: focused ? "red" : '#fff' }}>Profile</Text>
            </View>
          ),
        }}
      />
    </TabBatatinha.Navigator>
  )
}