import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen.jsx';
import PlayerSelect from './screens/PlayerSelect.jsx';
import GameScreen from './screens/GameScreen.jsx';
import RoundScreen from './screens/RoundScreen.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='PlayerSelect' component={PlayerSelect} />
        <Stack.Screen name='Game' component={GameScreen} />
        <Stack.Screen name='Round' component={RoundScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

