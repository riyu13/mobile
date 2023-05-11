import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card, Title, Text } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Pmenu({ navigation }) {
  return (
    <View style={styles.container}>
      <MenuCard navigation={navigation} />
    </View>
  );
}

function MenuCard({ navigation }) {
  const handleNavigation = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View>
      <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#8D4513', fontSize: 30}}>Partikel Dasar</Text>
      <View style={styles.row}>
      <Card style={styles.card2}>
        <MenuButton
          icon2="book"
          title="は (Wa)"
          onPress={() => handleNavigation('Partikel')}
        /></Card>
         <Card style={styles.card2}>
        <MenuButton
          icon2="book"
          title="お(O) で(De)"
          onPress={() => handleNavigation('Partikel2')}
        /></Card>
         <Card style={styles.card2}>
        <MenuButton
          icon2="book"
          title="に(Ni) も(Mo)"
          onPress={() => handleNavigation('Partikel3')}
        /></Card>
      </View>
      <View style={styles.row}>
      <Card style={styles.card3}>
      <MenuButton
          icon2="book"
          title="と(TO) が(Ga)"
          onPress={() => handleNavigation('Partikel4')}
        /></Card>
        <Card style={styles.card3}>
        <MenuButton
          icon2="book"
          title="の(No) など(Nado)"
          onPress={() => handleNavigation('Partikel5')}
        />
       </Card>
      </View>
      </View>
  );
}

function MenuButton({ icon2, title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome5 name={icon2} size={20} color="#8B4513" />
      <Title style={styles.title}>{title}</Title>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0E0E6'
  },
  card: {
    padding: 3,
    margin: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card2:{
    height: 100,
    width: 150,
    margin: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFE0'
  },
  card3:{
    height: 100,
    width: 225,
    margin: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFE0'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '30%',
  },
  title: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
    color: '#8B4513'
  },
});
