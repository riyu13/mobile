import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

export default function MyComponent({ navigation }) {
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
      <View style={styles.row}>
      <Card style={styles.card2}>
        <MenuButton
          icon2="money-bill-wave"
          title="Bayar"
          onPress={() => handleNavigation('Pembayaran')}
        /></Card>
         <Card style={styles.card2}>
        <MenuButton
          icon2="user-lock"
          title="Admin"
          onPress={() => handleNavigation('Admin')}
        /></Card>
         <Card style={styles.card2}>
        <MenuButton
          icon2="users"
          title="Kenshu"
          onPress={() => handleNavigation('Kenshusei')}
        /></Card>
      </View>
      <View style={styles.row}>
      <Card style={styles.card2}>
      <MenuButton
          icon2="sort-alpha-up"
          title="Huruf Jepang"
          onPress={() => handleNavigation('Hirakata')}
        /></Card>
        <Card style={styles.card2}>
        <MenuButton
          icon2="alipay"
          title="Kanji N5"
          onPress={() => handleNavigation('Kanjin5')}
        /></Card>
        <Card style={styles.card2}>
       <MenuButton
          icon2="boxes"
          title="Kata Benda"
          onPress={() => handleNavigation('KataBenda')}
        /></Card>
      </View>
      <View style={styles.row}>
      <Card style={styles.card2}>
        <MenuButton
          icon2="chalkboard-teacher"
          title="Kata Kerja"
          onPress={() => handleNavigation('KataKerja')}
        /></Card>
        <Card style={styles.card2}>
        <MenuButton
          icon2="smile"
          title="Kata Sifat"
          onPress={() => handleNavigation('KataSifat')}
        /></Card>
        <Card style={styles.card2}>
        <MenuButton
          icon2="journal-whills"
          title="Tata Bahasa"
          onPress={() => handleNavigation('TBmenu1')}
        /></Card>
      </View>
    </View>
  );
}

function MenuButton({ icon2, title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome5 name={icon2} size={20} color="#8B4513" marginTop={30} />
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
    width: '100%',
  },
  title: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
    color: '#8B4513'
  },
});
