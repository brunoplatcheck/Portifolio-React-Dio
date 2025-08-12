// src/screens/EducationScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ProfileImage from '../components/ProfileImage';
import data from '../data/data.json';
import { ProfileData, Education as EducationType } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Para o ícone de expansão

interface EducationCardProps {
  education: EducationType;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpand} style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.degree}>{education.degree}</Text>
          <Text style={styles.course}>{education.course}</Text>
          <Text style={styles.institution}>{education.institution}</Text>
          <Text style={styles.period}>{education.period}</Text>
        </View>
        <MaterialCommunityIcons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="#fff" // Ícone branco
        />
      </View>
      {expanded && education.competencies && (
        <View style={styles.competenciesContainer}>
          <Text style={styles.competenciesTitle}>Competências Adquiridas:</Text>
          {education.competencies.map((comp, index) => (
            <Text key={index.toString()} style={styles.competencyItem}>
              • {comp}
            </Text>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};

const EducationScreen: React.FC = () => {
  const profileData: ProfileData = data;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Seção Superior - Branca (Foto e Nome) */}
      <View style={styles.topHeaderSection}>
        <ProfileImage />
        <Text style={styles.name}>{profileData.profile.name}</Text>
      </View>

      {/* Seção Inferior - Preta (Formações) */}
      <View style={styles.educationSection}>
        <Text style={styles.screenTitle}>Minha Formação Principal</Text>

        {profileData.mainEducation.map((edu, index) => (
          <EducationCard key={index.toString()} education={edu} />
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
  educationSection: {
    backgroundColor: '#000000', // Preto
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 50, // Espaço extra para o scroll
  },
  name: {
    fontSize: 28,
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
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff', // Texto branco
  },
  course: {
    fontSize: 16,
    color: '#ccc', // Cinza claro
    marginBottom: 3,
  },
  institution: {
    fontSize: 14,
    color: '#bbb', // Cinza mais claro
    fontStyle: 'italic',
    marginBottom: 5,
  },
  period: {
    fontSize: 14,
    color: '#aaa', // Cinza
  },
  competenciesContainer: {
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#555', // Separador cinza
  },
  competenciesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Texto branco
    marginBottom: 8,
  },
  competencyItem: {
    fontSize: 14,
    color: '#ccc', // Texto cinza claro
    marginBottom: 3,
    marginLeft: 10,
  },
});

export default EducationScreen;