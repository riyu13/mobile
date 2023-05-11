import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Kamus1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengertian kata kerja bentuk U(bentuk kamus) atau する</Text>
      <Text style={styles.text}>
       "Suru" (する) adalah kata kerja dasar dalam bahasa Jepang yang memiliki arti "melakukan" atau "mengerjakan". Kata kerja ini sering digunakan dalam bahasa Jepang sebagai kata bantu untuk membentuk kata kerja yang lebih spesifik.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Penggunaan{'\n'}
      </Text>
        -Benkyou suru (勉強する) - Belajar{'\n'}
        -Shumi wo suru (趣味をする) - Melakukan hobi{'\n'}
        -Ryokou suru (旅行する) - Berpergian/ Melakukan perjalanan{'\n'}
        -Kaimono suru (買い物する) - Berbelanja/ Membeli sesuatu{'\n'}
        -Renshuu suru (練習する) - Berlatih
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffe0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#8B4513',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#8B4513',
  },
  text2: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#8B4513',
    fontWeight: 'bold',
  },
});

export default Kamus1;
