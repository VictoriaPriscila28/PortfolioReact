import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

import profileImage from '../assets/foto de perfil 6.jpg';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Victoria Priscila</Text>
      <Image
        source={profileImage}
        style={styles.image}
      />
      <Button
        title="Sobre Mim"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="Experiência"
        onPress={() => navigation.navigate('Experience')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20,
  },
});
