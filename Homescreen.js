import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Page from'./Page';
import Profile from './App';
import Analytics from './analytics-bar';
import Expenses from './expenses_progress-bar';
import Nutrition from './nutritional-intake';
import Message from './message';
import login from './login';
import Welcome from './welcome';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Live Cam"
        onPress={() => navigation.push('Page')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Page} />
        <Stack.Screen name="Details" component={Profile} />
        <Stack.Screen name="Insights" component={Expenses} />
        <Stack.Screen name="Nutrition" component={Nutrition} />
        <Stack.Screen name="Growth Rate" component={Analytics} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Login" component={login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
