import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Kamus2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Penggunaan つもり atau Tsumori</Text>
      <Text style={styles.text}>
       "Tsumori" (つもり) adalah sebuah partikel bahasa Jepang yang memiliki arti "berencana untuk" atau "mempunyai niat untuk".
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        - KK Kamus + つもりです (bermaksud){'\n'}
        - KK Kamus + つもりはありません (tidak bermaksud){'\n'}
        - KK Negarif + つもりです
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Kalimat{'\n'}
      </Text>
        - 今度週末京都に行くつもりです{'\n'}
        - Kondo shuumatsu kyoto ni ikutsumori desu.{'\n'}
        - Saya berencana untuk pergi ke Kyoto akhir pekan ini.
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

export default Kamus2;
