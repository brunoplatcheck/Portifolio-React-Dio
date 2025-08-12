// src/components/ProfileImage.tsx
import React from 'react';
import { Image, StyleSheet } from 'react-native';

// Importe a imagem localmente. O caminho é relativo a este arquivo.
// ********* CORREÇÃO AQUI: sua-foto.jpeg *********
const profileImage = require('../../assets/img/sua-foto.jpeg');

const ProfileImage: React.FC = () => {
  return (
    <Image
      source={profileImage}
      style={styles.profileImage}
    />
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#000000', // Cor da borda
    marginBottom: 20,
  },
});

export default ProfileImage;