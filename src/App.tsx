// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import SkillScreen from './src/screens/SkillScreen';
import EducationScreen from './src/screens/EducationScreen';
import ComplementaryEducationScreen from './src/screens/ComplementaryEducationScreen';
import ProfessionalExperienceScreen from './src/screens/ProfessionalExperienceScreen'; // Importe a nova tela

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Skills"
          component={SkillScreen}
          options={{ title: 'Minhas Habilidades' }}
        />
        <Stack.Screen
          name="Education"
          component={EducationScreen}
          options={{ title: 'Minha Formação Principal' }}
        />
        <Stack.Screen
          name="ComplementaryEducation"
          component={ComplementaryEducationScreen}
          options={{ title: 'Cursos e Certificações' }}
        />
        {/* Adicione a nova tela de Experiências Profissionais aqui */}
        <Stack.Screen
          name="ProfessionalExperience"
          component={ProfessionalExperienceScreen}
          options={{ title: 'Experiências Profissionais' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}