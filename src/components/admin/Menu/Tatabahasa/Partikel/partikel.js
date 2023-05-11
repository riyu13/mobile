import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Partikel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>1. Pengunaan Partikel は atau yag dibaca (Wa)</Text>
      <Text style={styles.text}>
        Partikel ini yang biasanya dibaca dengan (ha) tapi jika dimasukkan kedalam sebuah kalimat akan berubah menjadi huruf(Wa). Jika diterjemahkan kedalam bahasa indonesia sendiri secara harfiah partikel ini memiliki arti 'adalah' dan dalam bahasa inggris partikel ini mirip seperti 'is, am, dan are' 
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        - Topik + は + ...desu(waktu sekarang){'\n'}
        - Topik + は + ...desuta(waktu lampau){'\n'}
        - Topik + は + ...desuka(pertanyaan sekarang){'\n'}
        - Topik + は + ...deshitaka(pertanyaan lampau)
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Penggunaan{'\n'}
      </Text>
        - これはえんぴつです。{'\n'}
        - Kore wa enpitsu desu.{'\n'}
        - Ini dalah pensil.{'\n'}
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

export default Partikel;
