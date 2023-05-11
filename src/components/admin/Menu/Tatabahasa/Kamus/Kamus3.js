import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Kamus3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Penggunaan 前に atau Maeni</Text>
      <Text style={styles.text}>
       "Tsumori" (つもり) adalah sebuah partikel bahasa Jepang yang memiliki arti "berencana untuk" atau "mempunyai niat untuk".
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        – Kata Kerja -U + 前に{'\n'}
        – Kata Benda + の前に
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Kalimat{'\n'}
      </Text>
        - 学校に行く前に、朝ご飯を食べます。{'\n'}
        - Gakkou ni iku maeni, asagohan wo tabemasu.{'\n'}
        - Saya makan sarapan sebelum pergi ke sekolah.
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

export default Kamus3;
