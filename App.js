import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { Colors } from './colors'; 
import Home from './home/Home';
import Character from './Perso/Character';
import About from './aPropos/About';
import GameMap from './Map/Map';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = require('./assets/home-removebg-preview.png');
            } else if (route.name === 'Personnages') {
              iconSource = require('./assets/personnages-removebg-preview.png');
            } else if (route.name === 'A Propos') {
              iconSource = require('./assets/about.png');
            } else if (route.name === 'GameMap') {
              iconSource = require('./assets/maps-logo-removebg-preview.png');
            }

            return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
          },
          tabBarActiveTintColor: Colors.mysticBlue, 
          tabBarInactiveTintColor: Colors.silverGray, 
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Personnages" component={Character} />
        <Tab.Screen name="A Propos" component={About} />
        <Stack.Screen name="GameMap" component={GameMap} options={{ title: 'Carte de jeu' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
