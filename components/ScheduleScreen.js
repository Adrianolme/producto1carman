import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Agendar Cita</Text>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Generando Cita</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre Propietario</Text>
          <TextInput style={styles.input} placeholder="Input" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Modelo</Text>
          <TextInput style={styles.input} placeholder="Input" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Año</Text>
          <TextInput style={styles.input} placeholder="Input" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Número telefónico</Text>
          <TextInput style={styles.input} placeholder="Input" />
        </View>
        <View style={styles.datePickerContainer}>
          <TouchableOpacity style={styles.dateButton}>
            <Text>Selección de Día</Text>
          </TouchableOpacity>
          <Ionicons name="calendar-outline" size={24} color="black" />
        </View>
        <Text style={styles.label}>Descripción del Problema</Text>
        <TextInput style={styles.textArea} placeholder="Value" multiline />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7ECF6',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#EADDE1',
    borderRadius: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: '#D9C8CF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
  input: {
    backgroundColor: 'transparent',
    paddingVertical: 5,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
  },
  textArea: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    height: 60,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
