// src/components/SocialLink.tsx
import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet, View } from 'react-native';
import { SocialLink as SocialLinkType } from '../types';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'; // Importe os ícones

interface SocialLinkProps {
  link: SocialLinkType;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link }) => {
  const handlePress = () => {
    Linking.openURL(link.url);
  };

  // Função para retornar o componente de ícone correto
  const getIconComponent = (iconName: string, color: string) => {
    switch (iconName) {
      case 'github':
        return <FontAwesome5 name="github" size={20} color="white" />;
      case 'linkedin':
        return <FontAwesome5 name="linkedin-in" size={20} color="white" />;
      case 'cube-outline': // Para Sketchfab
        return <MaterialCommunityIcons name="cube-outline" size={24} color="white" />;
      case 'file-document-outline': // Para Lattes
        return <MaterialCommunityIcons name="file-document-outline" size={22} color="white" />;
      case 'gmail': // Para Gmail
        return <MaterialCommunityIcons name="gmail" size={22} color="white" />;
      case 'email': // Caso use apenas 'email'
        return <MaterialCommunityIcons name="email" size={22} color="white" />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: link.color }]} // Usa a cor do link
      onPress={handlePress}
    >
      {getIconComponent(link.icon, link.color)}
      <Text style={styles.text}>{link.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', // Alinha ícone e texto lado a lado
    alignItems: 'center',
    justifyContent: 'center', // Centraliza o conteúdo (ícone + texto)
    width: '80%', // Largura para uniformidade
    maxWidth: 250, // Largura máxima para telas maiores
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000', // Sombra para profundidade
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10, // Espaço entre o ícone e o texto
  },
});

export default SocialLink;