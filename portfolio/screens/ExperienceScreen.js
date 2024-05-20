import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExperienceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência</Text>
      <Text>Adicione aqui informações sobre sua experiência.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
