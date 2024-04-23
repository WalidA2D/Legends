import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
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
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Personnages') {
              iconName = 'person';
            } else if (route.name === 'A Propos') {
              iconName = 'information-circle';
            }

            // Vous pouvez retourner l'icône correspondante ici
            return <Ionicons name={iconName} size={size} color={color} />;
          },
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
