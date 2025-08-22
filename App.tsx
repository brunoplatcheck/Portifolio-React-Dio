import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importe TODAS as suas telas existentes
import MainScreen from './src/screens/MainScreen';
import SkillScreen from './src/screens/SkillScreen';
import EducationScreen from './src/screens/EducationScreen';
import ComplementaryEducationScreen from './src/screens/ComplementaryEducationScreen';
import ProfessionalExperienceScreen from './src/screens/ProfessionalExperienceScreen';
import GitHubProjectsScreen from './src/screens/GitHubProjectsScreen'; // <-- Certifique-se que existe

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
        <Stack.Screen
          name="ProfessionalExperience"
          component={ProfessionalExperienceScreen}
          options={{ title: 'Experiências Profissionais' }}
        />
        <Stack.Screen
          name="GitHubProjects" // <-- Nome da rota para o Stack Navigator
          component={GitHubProjectsScreen}
          options={{ title: 'Meus Projetos GitHub' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}