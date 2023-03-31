import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen.jsx';
import PlayerSelect from './screens/PlayerSelect.jsx';
import NameScreen from './screens/NameScreen.jsx';
import RoundScreen from './screens/RoundScreen.jsx';
import CategoryScreen from './screens/CategoryScreen.jsx';
import PlayScreen from './screens/PlayScreen.jsx';
import WinnerScreen from './screens/WinnerScreen.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='PlayerSelect' component={PlayerSelect} />
        <Stack.Screen name='Name' component={NameScreen} />
        <Stack.Screen name='Round' component={RoundScreen} /> 
        <Stack.Screen name='Category' component={CategoryScreen} /> 
        <Stack.Screen name='Play' component={PlayScreen} /> 
        <Stack.Screen name='Winner' component={WinnerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

