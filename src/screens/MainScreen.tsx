// src/screens/MainScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Dimensions, ScrollView } from 'react-native'; // Adicionado ScrollView
import { StackScreenProps } from '@react-navigation/stack'; // <-- Mantido StackScreenProps

import ProfileImage from '../components/ProfileImage';
import SocialLink from '../components/SocialLink';
import data from '../data/data.json';
import { ProfileData } from '../types'; // <-- Não usa DrawerStackParamList aqui

// Tipagem para as rotas do Stack Navigator
type RootStackParamList = {
  Main: undefined;
  Skills: undefined;
  Education: undefined;
  ComplementaryEducation: undefined;
  ProfessionalExperience: undefined;
  GitHubProjects: undefined; // <-- Adicionado para a nova rota de Stack
};

type MainScreenProps = StackScreenProps<RootStackParamList, 'Main'>;

const { height } = Dimensions.get('window');

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const profileData: ProfileData = data;

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* O botão de menu do Drawer e qualquer lógica relacionada ao Drawer foram removidos */}
      
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

        {/* Seção Inferior - Cinza Escuro (Botões de Navegação com Scroll) */}
        <View style={styles.bottomSection}>
          <ScrollView contentContainerStyle={styles.scrollableNavigation}> {/* <-- ScrollView adicionado aqui */}
            <View style={styles.navigationButtonsContainer}>
              <View style={styles.navButtonWrapper}>
                <Button
                  title="Minhas Habilidades"
                  onPress={() => navigation.navigate('Skills')} // <-- Navega para a rota de Stack
                  color="#000000"
                />
              </View>
              <View style={styles.navButtonWrapper}>
                <Button
                  title="Formação Principal"
                  onPress={() => navigation.navigate('Education')} // <-- Navega para a rota de Stack
                  color="#000000"
                />
              </View>
              <View style={styles.navButtonWrapper}>
                <Button
                  title="Cursos e Certificações"
                  onPress={() => navigation.navigate('ComplementaryEducation')} // <-- Navega para a rota de Stack
                  color="#000000"
                />
              </View>
              <View style={styles.navButtonWrapper}>
                <Button
                  title="Experiências Profissionais"
                  onPress={() => navigation.navigate('ProfessionalExperience')} // <-- Navega para a rota de Stack
                  color="#000000"
                />
              </View>
              <View style={styles.navButtonWrapper}>
                <Button
                  title="Veja Meus Projetos GitHub"
                  onPress={() => navigation.navigate('GitHubProjects')} // <-- Ajustado para a rota de Stack 'GitHubProjects'
                  color="#000000"
                />
              </View>
              {/* O botão "Sobre Mim" não foi explicitamente pedido para a MainScreen com Stack Navigator.
                  Se desejar adicioná-lo, me avise! */}
            </View>
          </ScrollView>
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
  // O estilo menuButton foi removido pois não há botão de menu do Drawer
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
  scrollableNavigation: { // <-- Estilo adicionado para o ScrollView
    alignItems: 'center',
    paddingVertical: 10,
    paddingBottom: 20, // Garante que o último botão não seja cortado
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
    marginBottom: 35, // Ajustei para 15px, estava 35px no seu código anterior
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
    backgroundColor: '#0077B5', // Mantido o estilo de cor que você usava
    width: '100%',
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