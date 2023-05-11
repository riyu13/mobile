import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Partikel3 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>4. Penggunaan Partikel に atau Ni</Text>
      <Text style={styles.text}>
        Partikel に(Ni) dalam bahasa jepang sendiri memiliki beberapa arti, yaitu pada, di, & ke. Partikel ini digunakan untuk menegaskan penggunaan kata tempat dan waktu dan digunakan pada kondisi tertentu.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        - Kata Benda + に + Kata Kerja.{'\n'}
        - Waktu + に + Kata Kerja.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Penggunaan{'\n'}
      </Text>
        - 学校に行きます.{'\n'}
        - Gakkou Ni Ikimasu.{'\n'}
        - Pergi Ke Sekolah.
      </Text>
      <Text style={styles.title}>5. Penggunaan Partikel も atau Mo</Text>
      <Text style={styles.text}>
        Partikel も(Mo) ini digunakan dalam kalimat yang sudah memiliki predikat. Biasanya digunakan sebagai pengganti partikel は(wa).
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        - kata benda + も + kata benda 2.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Penggunaan{'\n'}
      </Text>
        - これは私の車です、あれも私の車です.{'\n'}
        - Kore wa watashi no kuruma desu, are mo watashi no kuruma desu.{'\n'}
        - Ini mobil saya, dan itu juga mobil saya.
      </Text>
      </ScrollView>
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

export default Partikel3;
