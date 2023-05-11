import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Text } from 'react-native-paper';
import axios from 'axios';

const KataBenda = ({ navigation }) => {
  const [kanji, setKanji] = React.useState('');
  const [arti, setArti] = React.useState('');
  const [romaji, setRomaji] = React.useState('');
  const [msg, setMsg] = useState('');

  const saveKataBenda = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://192.168.1.5:5000/katabenda", {
        kanji: kanji, 
        romaji: romaji,
        arti: arti
      });
      navigation.navigate('Tabel KataBenda')
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };


  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Kata Benda</Title>
          <TextInput
            label="Kanji"
            value={kanji}
            onChangeText={(text) => setKanji(text)}
            mode="outlined"
            style={styles.input}
          />
           <TextInput
            label="Romaji"
            value={romaji}
            onChangeText={(text) => setRomaji(text)}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Arti"
            value={arti}
            onChangeText={(text) => setArti(text)}
            mode="outlined"
            style={styles.input}
          />
          <Button mode="contained" style={styles.button} onPress={saveKataBenda}>
            Simpan
          </Button>
          <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Tabel KataBenda')}>
            Tabel Kata Benda
          </Button>
          <View style={styles.forgotPasswordContainer}>
          </View>
        </Card.Content>
        <Text style={{color: 'red'}}>{msg}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    padding: 16,
    backgroundColor: '#FFFFE0'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#000'
  },
  input: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#8B4513',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 5,
  },
});

export default KataBenda;