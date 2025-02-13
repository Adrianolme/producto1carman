// ScheduleScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ScheduleScreen() {
  return (
    <View>
      <Text>Agendar Cita</Text>
      <TextInput placeholder="Nombre Propietario" />
      <TextInput placeholder="Modelo" />
      <TextInput placeholder="Año" />
      <TextInput placeholder="Número Telefónico" />
      <TextInput placeholder="Descripción del Problema" multiline />
      <Button title="Agendar" onPress={() => {}} />
    </View>
  );
}