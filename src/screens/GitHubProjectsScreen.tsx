// src/screens/GitHubProjectsScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import ProfileImage from '../components/ProfileImage';
import data from '../data/data.json';
import { ProfileData, GitHubProject as GitHubProjectType } from '../types';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

interface GitHubProjectCardProps {
  project: GitHubProjectType;
}

const GitHubProjectCard: React.FC<GitHubProjectCardProps> = ({ project }) => {
  const handlePress = () => {
    Linking.openURL(project.html_url);
  };

  // Função para retornar um ícone de linguagem ou um padrão
  const getLanguageIcon = (language: string | null) => {
    if (!language) return null;
    switch (language.toLowerCase()) {
      case 'javascript': return <MaterialCommunityIcons name="language-javascript" size={18} color="#F7DF1E" />;
      case 'typescript': return <MaterialCommunityIcons name="language-typescript" size={18} color="#3178C6" />;
      case 'python': return <MaterialCommunityIcons name="language-python" size={18} color="#3776AB" />;
      case 'java': return <MaterialCommunityIcons name="language-java" size={18} color="#007396" />;
      case 'html': return <MaterialCommunityIcons name="language-html5" size={18} color="#E34F26" />;
      case 'css': return <MaterialCommunityIcons name="language-css3" size={18} color="#1572B6" />;
      case 'dart': return <MaterialCommunityIcons name="language-dart" size={18} color="#0175C2" />;
      case 'php': return <MaterialCommunityIcons name="language-php" size={18} color="#777BB4" />;
      case 'c#': return <MaterialCommunityIcons name="language-csharp" size={18} color="#239120" />;
      case 'c++': return <MaterialCommunityIcons name="language-cpp" size={18} color="#00599C" />;
      // Adicione mais linguagens conforme necessário
      default: return <MaterialCommunityIcons name="code-braces" size={18} color="#cccccc" />;
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.projectTitleWrapper}>
          {getLanguageIcon(project.language)}
          <Text style={styles.projectName}>{project.name}</Text>
        </View>
        <FontAwesome5 name="github" size={20} color="#fff" />
      </View>
      <Text style={styles.projectDescription}>{project.description || 'Sem descrição.'}</Text>
      <View style={styles.projectDetails}>
        {project.language && <Text style={styles.projectLanguage}>{project.language}</Text>}
        <View style={styles.statItem}>
          <FontAwesome5 name="star" size={14} color="#FFD700" style={styles.statIcon} />
          <Text style={styles.statText}>{project.stargazers_count}</Text>
        </View>
        <View style={styles.statItem}>
          <FontAwesome5 name="code-branch" size={14} color="#cccccc" style={styles.statIcon} />
          <Text style={styles.statText}>{project.forks_count}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const GitHubProjectsScreen: React.FC = () => {
  const profileData: ProfileData = data;
  const [projects, setProjects] = useState<GitHubProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const fetchedProjects: GitHubProjectType[] = [];
        for (const featuredProject of profileData.featuredProjects) {
          const response = await fetch(featuredProject.repoUrl);
          if (!response.ok) {
            console.warn(`Aviso: Erro ao buscar projeto ${featuredProject.name} (${featuredProject.repoUrl}). Status: ${response.status}`);
            continue;
          }
          const projectData: GitHubProjectType = await response.json();
          fetchedProjects.push(projectData);
        }
        setProjects(fetchedProjects);
      } catch (err: any) {
        console.error("Erro geral ao buscar projetos do GitHub:", err);
        setError("Não foi possível carregar os projetos. Verifique sua conexão e tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, [profileData.featuredProjects]);

  const handleGitHubProfilePress = () => {
    Linking.openURL(`https://github.com/${profileData.githubUser}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Seção Superior - Branca (Foto e Link do GitHub) */}
      <View style={styles.topHeaderSection}>
        <ProfileImage />
        <TouchableOpacity onPress={handleGitHubProfilePress}>
          <Text style={styles.githubProfileLink}>@{profileData.githubUser}</Text>
        </TouchableOpacity>
      </View>

      {/* Seção Inferior - Preta (Cards de Projetos) */}
      <View style={styles.projectsSection}>
        <Text style={styles.screenTitle}>Meus Projetos GitHub</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#fff" style={styles.loadingIndicator} />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          projects.map((project, index) => (
            <GitHubProjectCard key={index.toString()} project={project} />
          ))
        )}
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
  projectsSection: {
    backgroundColor: '#000000',
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 50,
  },
  githubProfileLink: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A66C2',
    marginTop: 10,
    textDecorationLine: 'underline',
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
  card: {
    backgroundColor: '#333333',
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
    marginBottom: 10,
  },
  projectTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
    flexShrink: 1,
  },
  projectDescription: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  projectDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  projectLanguage: {
    fontSize: 13,
    color: '#fff',
    backgroundColor: '#444',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginRight: 15,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  statIcon: {
    marginRight: 5,
  },
  statText: {
    fontSize: 13,
    color: '#fff',
  },
  loadingIndicator: {
    marginTop: 50,
  },
  errorText: {
    color: '#ff6666',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});

export default GitHubProjectsScreen;