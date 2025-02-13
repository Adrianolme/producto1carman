import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


import LoginScreen from './components/LoginScreen';
import SettingsScreen from './components/SettingsScreen';
import RegisterScreen from './components/RegisterScreen';
import ScheduleScreen from './components/ScheduleScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="account-circle" size={30} />
        <Text style={styles.title}>Taller Carman</Text>
        <View style={styles.iconContainer}>
          <Icon name="search" size={25} style={styles.icon} />
          <Icon name="settings" size={25} style={styles.icon} />
        </View>
      </View>
      
      <Text style={styles.sectionTitle}>Citas Pendientes</Text>
      <ScrollView horizontal>
        <TouchableOpacity style={styles.card}><Text>Nissan 18 V</Text></TouchableOpacity>
        <TouchableOpacity style={styles.card}><Text>Kia Sportage</Text></TouchableOpacity>
      </ScrollView>

      <Text style={styles.sectionTitle}>Lista de Refacciones</Text>
      <Image source={{ uri: 'https://example.com/car.png' }} style={styles.carImage} />
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Login') {
              iconName = 'login';
            } else if (route.name === 'Registro') {
              iconName = 'person-add';
            } else if (route.name === 'Citas') {
              iconName = 'event';
            } else if (route.name === 'Configuración') {
              iconName = 'settings';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Registro" component={RegisterScreen} />
        <Tab.Screen name="Citas" component={ScheduleScreen} />
        <Tab.Screen name="Configuración" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold' },
  iconContainer: { flexDirection: 'row' },
  icon: { marginLeft: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  card: { backgroundColor: '#ddd', padding: 20, borderRadius: 10, marginRight: 10 },
  carImage: { width: '100%', height: 150, resizeMode: 'contain', marginVertical: 10 },
  
});
