import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Text } from 'react-native-paper';
import axios from 'axios';

const Kanjin5 = ({ navigation }) => {
  const [kanji, setKanji] = React.useState('');
  const [onyomi, setOnyomi] = React.useState('');
  const [kunyomi, setKunyomi] = React.useState('');
  const [arti, setArti] = React.useState('');
  const [msg, setMsg] = useState("");

  const saveKanjin5 = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://192.168.1.5:5000/kanjin5", {
        kanji: kanji, 
        onyomi: onyomi,
        kunyomi: kunyomi,
        arti: arti
      });
      navigation.navigate('Tabel Kanjin5')
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
          <Title style={styles.title}>Kanji N5</Title>
          <TextInput
            label="Kanji"
            value={kanji}
            onChangeText={(text) => setKanji(text)}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Onyomi"
            value={onyomi}
            onChangeText={(text) => setOnyomi(text)}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Kunyomi"
            value={kunyomi}
            onChangeText={(text) => setKunyomi(text)}
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
          <Button mode="contained" style={styles.button} onPress={saveKanjin5}>
            Simpan
          </Button>
          <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Tabel Kanjin5')}>
            Tabel Kanji N5
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
  forgotPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  forgotPasswordButton: {
    marginLeft: 8,
  },
});

export default Kanjin5;