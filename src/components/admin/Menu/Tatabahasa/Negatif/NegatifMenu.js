import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card, Title, Text } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

export default function NegatifMenu({ navigation }) {
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
      <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#8D4513', fontSize: 30}}>Bentuk Negatif</Text>
      <View style={styles.row}>
      <Card style={styles.card2}>
        <MenuButton
          icon2="book"
          title="Bentuk negatif ～ない atau ~Nai"
          onPress={() => handleNavigation('Negatif1')}
        /></Card>
         <Card style={styles.card2}>
        <MenuButton
          icon2="book"
          title="Perubahan Negatif 2"
          onPress={() => handleNavigation('Negatif2')}
        /></Card>
      </View>
      <View style={styles.row}>
      <Card style={styles.card2}>
      <MenuButton
          icon2="book"
          title="PErubahan Negatif 3"
          onPress={() => handleNavigation('Negatif3')}
        /></Card>
        <Card style={styles.card2}>
        <MenuButton
          icon2="book"
          title="Perbuhaan Negatif 4"
          onPress={() => handleNavigation('Negatif4')}
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
    height: 100,
    width: '90%',
  },
  title: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
    color: '#8B4513'
  },
});
