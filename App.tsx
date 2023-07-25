import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./routes/Home/Home"
import Transaction from './routes/Transaction/Transaction';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
      >
        <Stack.Screen
          name='transaction'
          component={Transaction}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

