// src/screens/SkillScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileImage from '../components/ProfileImage';
import data from '../data/data.json';
import { ProfileData } from '../types';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; // Importe os ícones

interface ProgressBarProps {
  skillName: string;
  level: number;
  icon?: string; // Adicione a propriedade icon aqui
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skillName, level, icon }) => {
  // Função auxiliar para renderizar o ícone correto
  const renderSkillIcon = (iconName: string | undefined) => {
    if (!iconName) return null;

    // Tenta usar MaterialCommunityIcons primeiro, se não encontrar, tenta FontAwesome5
    // Você pode adicionar mais bibliotecas de ícones aqui, se necessário.
    const IconComponent = MaterialCommunityIcons;
    
    // Alguns ícones específicos que podem estar em FontAwesome5
    if (iconName === 'github' || iconName === 'linkedin' || iconName === 'database' || iconName === 'server' || iconName === 'sitemap') {
      return <FontAwesome5 name={iconName as any} size={18} color="#fff" style={styles.skillIcon} />;
    }
    
    // Ícones para Flutter, Unity, Blender, etc.
    if (iconName === 'flutter' || iconName === 'unity' || iconName === 'blender' || iconName === 'microsoft-office' || iconName === 'adobe-photoshop' || iconName === 'microsoft-azure' || iconName === 'dev-to') {
        return <MaterialCommunityIcons name={iconName as any} size={18} color="#fff" style={styles.skillIcon} />;
    }

    // Padrão para MaterialCommunityIcons
    return <IconComponent name={iconName as any} size={18} color="#fff" style={styles.skillIcon} />;
  };

  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.skillNameWrapper}>
        {renderSkillIcon(icon)}
        <Text style={styles.skillText}>{skillName}</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${level}%` }]} />
      </View>
    </View>
  );
};

const SkillScreen: React.FC = () => {
  const profileData: ProfileData = data;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Seção Superior - Branca (Foto e Nome) */}
      <View style={styles.topHeaderSection}>
        <ProfileImage />
        <Text style={styles.name}>{profileData.profile.name}</Text>
      </View>

      {/* Seção Inferior - Preta (Habilidades) */}
      <View style={styles.skillsSection}>
        <Text style={styles.screenTitle}>Minhas Habilidades</Text>

        <Text style={styles.sectionTitle}>Linguagens de Programação</Text>
        {profileData.skills.linguagensDeProgramacao.map((skill) => (
          <ProgressBar key={skill.name} skillName={skill.name} level={skill.level} icon={skill.icon} />
        ))}

        <Text style={styles.sectionTitle}>Desenvolvimento de Software</Text>
        {profileData.skills.desenvolvimentoSoftware.map((skill) => (
          <ProgressBar key={skill.name} skillName={skill.name} level={skill.level} icon={skill.icon} />
        ))}

        <Text style={styles.sectionTitle}>Ferramentas e Design</Text>
        {profileData.skills.ferramentasEDesign.map((skill) => (
          <ProgressBar key={skill.name} skillName={skill.name} level={skill.level} icon={skill.icon} />
        ))}

        <Text style={styles.sectionTitle}>Qualidade de Software (QA)</Text>
        {profileData.skills.qualidadeDeSoftware.map((skill) => (
          <ProgressBar key={skill.name} skillName={skill.name} level={skill.level} icon={skill.icon} />
        ))}

        <Text style={styles.sectionTitle}>Dados e Inteligência Artificial</Text>
        {profileData.skills.dadosEIA.map((skill) => (
          <ProgressBar key={skill.name} skillName={skill.name} level={skill.level} icon={skill.icon} />
        ))}

        <Text style={styles.sectionTitle}>Cloud Computing e Infraestrutura</Text>
        {profileData.skills.cloudEInfraestrutura.map((skill) => (
          <ProgressBar key={skill.name} skillName={skill.name} level={skill.level} icon={skill.icon} />
        ))}

        <Text style={styles.sectionTitle}>Habilidades Gerais</Text>
        {profileData.skills.habilidadesGerais.map((skill) => (
          <ProgressBar key={skill.name} skillName={skill.name} level={skill.level} icon={skill.icon} />
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
  skillsSection: {
    backgroundColor: '#000000',
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingBottom: 5,
  },
  progressBarContainer: {
    marginBottom: 12,
  },
  skillNameWrapper: {
    flexDirection: 'row', // Alinha ícone e texto lado a lado
    alignItems: 'center', // Centraliza verticalmente
    marginBottom: 5,
  },
  skillIcon: {
    marginRight: 10, // Espaço entre o ícone e o texto
  },
  skillText: {
    fontSize: 16,
    color: '#fff',
  },
  progressBar: {
    height: 18,
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 9,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 9,
  },
});

export default SkillScreen;