// RegisterScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function RegisterScreen() {
  return (
    <View>
      <Text>Registro</Text>
      <TextInput placeholder="Usuario" />
      <TextInput placeholder="Correo" />
      <TextInput placeholder="Contraseña" secureTextEntry />
      <Button title="Registrarse" onPress={() => {}} />
    </View>
  );
}