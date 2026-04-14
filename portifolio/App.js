import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import SkillScreen from './src/screens/SkillScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ 
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#EAB308',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Perfil" component={MainScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Skills" component={SkillScreen} options={{ title: 'Habilidades' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}