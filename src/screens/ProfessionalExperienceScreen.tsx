// src/screens/ProfessionalExperienceScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ProfileImage from '../components/ProfileImage';
import data from '../data/data.json';
import { ProfileData, ProfessionalExperience as ProfessionalExperienceType } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Para o ícone de expansão

interface ProfessionalExperienceCardProps {
  experience: ProfessionalExperienceType;
}

const ProfessionalExperienceCard: React.FC<ProfessionalExperienceCardProps> = ({ experience }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpand} style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.role}>{experience.role}</Text>
          <Text style={styles.companyLocation}>{`${experience.company} - ${experience.location}`}</Text>
          <Text style={styles.period}>{experience.period}</Text>
        </View>
        <MaterialCommunityIcons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="#fff" // Ícone branco
        />
      </View>
      {expanded && experience.responsibilities && (
        <View style={styles.responsibilitiesContainer}>
          <Text style={styles.responsibilitiesTitle}>Responsabilidades:</Text>
          {experience.responsibilities.map((resp, index) => (
            <Text key={index.toString()} style={styles.responsibilityItem}>
              • {resp}
            </Text>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};

const ProfessionalExperienceScreen: React.FC = () => {
  const profileData: ProfileData = data;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Seção Superior - Branca (Foto e Nome) */}
      <View style={styles.topHeaderSection}>
        <ProfileImage />
        <Text style={styles.name}>{profileData.profile.name}</Text>
      </View>

      {/* Seção Inferior - Preta (Experiências) */}
      <View style={styles.experienceSection}>
        <Text style={styles.screenTitle}>Minhas Experiências Profissionais</Text>

        {profileData.professionalExperience.map((exp, index) => (
          <ProfessionalExperienceCard key={index.toString()} experience={exp} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#fff', // Fundo padrão branco
  },
  topHeaderSection: {
    backgroundColor: '#ffffff', // Branco
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
  experienceSection: {
    backgroundColor: '#000000', // Preto
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 50, // Espaço extra para o scroll
  },
  name: {
    fontSize: 28, // Ajustei o tamanho da fonte do nome para ser consistente com a MainScreen
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Texto branco
    marginBottom: 20,
    textAlign: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  card: {
    backgroundColor: '#333333', // Cinza escuro para os cards
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  role: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#fff', // Texto branco
  },
  companyLocation: {
    fontSize: 16,
    color: '#ccc', // Cinza claro
    marginBottom: 5,
  },
  period: {
    fontSize: 14,
    color: '#aaa', // Cinza
    fontStyle: 'italic',
    marginBottom: 10,
  },
  responsibilitiesContainer: {
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#555', // Separador cinza
  },
  responsibilitiesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Texto branco
    marginBottom: 8,
  },
  responsibilityItem: {
    fontSize: 14,
    color: '#ccc', // Texto cinza claro
    marginBottom: 3,
    marginLeft: 10,
  },
});

export default ProfessionalExperienceScreen;