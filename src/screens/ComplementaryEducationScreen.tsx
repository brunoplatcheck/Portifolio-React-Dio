// src/screens/ComplementaryEducationScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ProfileImage from '../components/ProfileImage';
import data from '../data/data.json';
import { ProfileData, ComplementaryCourse as ComplementaryCourseType } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Para o ícone de expansão

interface ComplementaryCourseCardProps {
  course: ComplementaryCourseType;
}

const ComplementaryCourseCard: React.FC<ComplementaryCourseCardProps> = ({ course }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity
      onPress={toggleExpand}
      style={[
        styles.courseCard,
        expanded ? styles.courseCardExpanded : null,
      ]}
    >
      <View style={styles.cardHeader}>
        <View style={styles.courseInfoWrapper}> {/* Novo wrapper para o texto do curso */}
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.courseInstitution}>{course.institution}</Text>
          <Text style={styles.coursePeriod}>{course.period}</Text>
        </View>
        <MaterialCommunityIcons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="#fff"
        />
      </View>
      {/* Aqui você pode adicionar mais detalhes se houver no JSON e quiser que apareçam ao expandir */}
      {/* Exemplo: se tivesse um campo 'description' no ComplementaryCourse */}
      {/*
      {expanded && course.description && (
        <View style={styles.courseDetailsContainer}>
          <Text style={styles.courseDetailsText}>{course.description}</Text>
        </View>
      )}
      */}
    </TouchableOpacity>
  );
};

const ComplementaryEducationScreen: React.FC = () => {
  const profileData: ProfileData = data;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Seção Superior - Branca (Foto e Nome) */}
      <View style={styles.topHeaderSection}>
        <ProfileImage />
        <Text style={styles.name}>{profileData.profile.name}</Text>
      </View>

      {/* Seção Inferior - Preta (Cursos) */}
      <View style={styles.coursesSection}>
        <Text style={styles.screenTitle}>Formações Complementares</Text>

        {profileData.complementaryCourses.map((categoryData, index) => (
          <View key={index.toString()} style={styles.categorySection}>
            <Text style={styles.categoryTitle}>{categoryData.category}</Text>
            {categoryData.courses.map((course, courseIndex) => (
              <ComplementaryCourseCard key={courseIndex.toString()} course={course} />
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  topHeaderSection: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
  coursesSection: {
    backgroundColor: '#000000',
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 50,
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
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  categorySection: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingBottom: 5,
  },
  courseCard: {
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseCardExpanded: {
    paddingBottom: 20,
    backgroundColor: '#444444',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseInfoWrapper: { // Estilo para o novo wrapper
    flex: 1, // Permite que ele ocupe o espaço disponível
    marginRight: 10, // Espaço entre o texto e o ícone
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 3,
  },
  courseInstitution: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 2,
  },
  coursePeriod: {
    fontSize: 12,
    color: '#aaa',
    fontStyle: 'italic',
  },
  courseDetailsContainer: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#555',
  },
  courseDetailsText: {
    fontSize: 14,
    color: '#ccc',
  },
});

export default ComplementaryEducationScreen;