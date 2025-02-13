// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function LoginScreen() {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Usuario" />
      <TextInput placeholder="Contraseña" secureTextEntry />
      <Button title="Iniciar Sesión" onPress={() => {}} />
    </View>
  );
}