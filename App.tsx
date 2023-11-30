import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./routes/Home/Home"
import Transaction from './routes/Transaction/Transaction';
import ExpensesScreen from "./routes/Expenses/Expenses";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='expenses'
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
        <Stack.Screen 
          name='expenses'
          component={ExpensesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

