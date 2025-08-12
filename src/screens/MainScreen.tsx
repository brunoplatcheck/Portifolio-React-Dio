// src/screens/MainScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import ProfileImage from '../components/ProfileImage';
import SocialLink from '../components/SocialLink';
import data from '../data/data.json';
import { ProfileData } from '../types';

type RootStackParamList = {
  Main: undefined;
  Skills: undefined;
  Education: undefined;
  ComplementaryEducation: undefined;
  ProfessionalExperience: undefined; // Adicione a nova rota aqui
};

type MainScreenProps = StackScreenProps<RootStackParamList, 'Main'>;

const { height } = Dimensions.get('window');

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const profileData: ProfileData = data;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Seção Superior - Branca (Foto e Nome) */}
        <View style={styles.topSection}>
          <ProfileImage />
          <Text style={styles.name}>{profileData.profile.name}</Text>
        </View>

        {/* Seção Central - Cinza Claro (Links Sociais) */}
        <View style={styles.middleSection}>
          <Text style={styles.sectionTitle}>Conecte-se Comigo</Text>
          <View style={styles.linksContainer}>
            {profileData.socialLinks.map((link) => (
              <SocialLink key={link.name} link={link} />
            ))}
          </View>
        </View>

        {/* Seção Inferior - Cinza Escuro (Botões de Navegação) */}
        <View style={styles.bottomSection}>
          <View style={styles.navigationButtonsContainer}>
            <View style={styles.navButtonWrapper}>
              <Button
                title="Minhas Habilidades"
                onPress={() => navigation.navigate('Skills')}
                color="#000000"
              />
            </View>
            <View style={styles.navButtonWrapper}>
              <Button
                title="Formação Principal"
                onPress={() => navigation.navigate('Education')}
                color="#000000"
              />
            </View>
            <View style={styles.navButtonWrapper}>
              <Button
                title="Cursos e Certificações"
                onPress={() => navigation.navigate('ComplementaryEducation')}
                color="#000000"
              />
            </View>
            {/* Novo botão para navegar para as Experiências Profissionais */}
            <View style={styles.navButtonWrapper}>
              <Button
                title="Experiências Profissionais"
                onPress={() => navigation.navigate('ProfessionalExperience')}
                color="#000000"
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topSection: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: height * 0.35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  middleSection: {
    backgroundColor: '#e0e0e0',
    width: '100%',
    height: height * 0.35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  bottomSection: {
    backgroundColor: '#555555',
    width: '100%',
    height: height * 0.30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 35,
  },
  linksContainer: {
    width: '100%',
    alignItems: 'center',
  },
  navigationButtonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  navButtonWrapper: {
    backgroundColor: '#0077B5', // Mantive a mesma cor para os botões de navegação
    width: '80%',
    maxWidth: 250,
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default MainScreen;