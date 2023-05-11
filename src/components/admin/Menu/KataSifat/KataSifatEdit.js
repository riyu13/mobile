import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';

const KataSifatEdit = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const [form, setForm] = useState({
    kanji: '',
    romaji: '',
    arti: '',
  });

  const onChangeForm = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmitForm = async () => {
    try {
      await axios.patch(`http://192.168.1.5:5000/katasifat/${params.uuid}`, form);
      Alert.alert('Berhasil', 'Data berhasil diupdate', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert('Gagal', 'Data gagal diupdate');
    }
  };

  const getKataSifat = async () => {
    try {
      const response = await axios.get(`http://192.168.1.5:5000/katasifat/${params.uuid}`);
      setForm(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Gagal', 'Gagal mendapatkan data');
    }
  };

  useEffect(() => {
    getKataSifat();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Edit Kata Sifat</Text>
      <ScrollView>
        <TextInput
          label="Kanji"
          value={form.kanji}
          onChangeText={(text) => onChangeForm('kanji', text)}
          style={styles.input}
        />
        <TextInput
          label="Romaji"
          value={form.romaji}
          onChangeText={(text) => onChangeForm('romaji', text)}
          style={styles.input}
          />
        <TextInput
          label="Arti"
          value={form.arti}
          onChangeText={(text) => onChangeForm('arti', text)}
          style={styles.input}
        />
        <Button mode="contained" onPress={onSubmitForm} style={styles.button}>
          Update
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#B0E0E6',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#FFFFE0'
  },
  button: {
    marginTop: 10,
    backgroundColor: '#8B4513'
  },
});

export default KataSifatEdit;
