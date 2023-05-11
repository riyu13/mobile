import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Kamus4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Penggunaan ことができる atau koto ga dekiru</Text>
      <Text style={styles.text}>
       Sebuah frasa bahasa Jepang yang artinya adalah "bisa" atau "dapat melakukan sesuatu". Frasa ini sering digunakan dalam bahasa Jepang untuk menyatakan kemampuan atau kebolehan seseorang dalam melakukan suatu tindakan atau aktivitas.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        - Kata kerja bentuk U + ことができます{'\n'}
        - Kata benda + ことができます
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Kalimat{'\n'}
      </Text>
        - 刺身を作ることができます。{'\n'}
        - Sashimi wo tsukuru koto ga dekimasu.{'\n'}
        - Saya bisa membuat hidangan sashimi.
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

export default Kamus4;
