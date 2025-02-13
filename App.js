import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F8EFF4', padding: 10 }}>
      {/* Encabezado */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <FontAwesome name="user-circle" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Taller Carman</Text>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome name="search" size={20} color="black" style={{ marginRight: 10 }} />
          <FontAwesome name="cog" size={20} color="black" />
        </View>
      </View>
      
      {/* Citas Pendientes */}
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Citas Pendientes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginVertical: 10 }}>
        {["Nissan 18 V", "Kia Sportage"].map((item, index) => (
          <View key={index} style={{ backgroundColor: '#ddd', padding: 20, marginRight: 10, borderRadius: 10 }}>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      
      {/* Lista de Refacciones */}
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lista de Refacciones</Text>
      <Image source={{ uri: 'https://via.placeholder.com/300x100' }} style={{ width: '100%', height: 100, marginVertical: 10 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {[1, 2].map((_, index) => (
          <View key={index} style={{ backgroundColor: '#ddd', padding: 40, borderRadius: 10, flex: 1, margin: 5 }} />
        ))}
      </View>
    </ScrollView>
  );
}

function CitasScreen() {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Citas</Text></View>;
}

function ConfigScreen() {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Configuración</Text></View>;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <FontAwesome name="home" size={20} color={color} /> }} />
        <Tab.Screen name="Citas" component={CitasScreen} options={{ tabBarIcon: ({ color }) => <FontAwesome name="star" size={20} color={color} /> }} />
        <Tab.Screen name="Configuración" component={ConfigScreen} options={{ tabBarIcon: ({ color }) => <FontAwesome name="cog" size={20} color={color} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
