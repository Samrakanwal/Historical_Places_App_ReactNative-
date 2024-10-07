import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';  
import DetailScreen from './src/screens/DetailScreen/DetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}  
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Historical Places' }}
          />

          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: 'Place Details' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
