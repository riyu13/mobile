import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Negatif2 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>2. Perubahan kata kerja ~ないで</Text>
      <Text style={styles.text}>
       Kata kerja "naide" (ないで) dalam bahasa Jepang sebenarnya bukan kata kerja, melainkan bentuk negatif dari bentuk perintah tidak langsung yang digunakan untuk meminta seseorang untuk tidak melakukan sesuatu. Bentuk perintah tidak langsung ini biasanya terbentuk dari bentuk dasar kata kerja yang diakhiri dengan huruf "e" (え) dengan menambahkan partikel "nasai" (なさい) di belakangnya.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        - Kata kerja + ~ないで
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh kalimat{'\n'}
      </Text>
        ~ あそこに行かないで危ないですから。{'\n'}
        ~ Asoko ni ikanaide abunai desu kara.{'\n'}
        ~ Jangan pergi kesana karena bahaya.
      </Text>
      <Text style={styles.title}>3. Kata kerja + ~ないでください(~naidekudasai)</Text>
      <Text style={styles.text}>
       Bentuk negatif dari perintah langsung dalam bahasa Jepang yang artinya "tolong jangan lakukan sesuatu." Kata ini umumnya digunakan dalam situasi formal untuk meminta seseorang untuk tidak melakukan sesuatu.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola kalimat{'\n'}
      </Text>
        ~ Kata kerja + ~ないでください
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh kalimat{'\n'}
      </Text>
        ~ このケーキを食べないでください。{'\n'}
        ~ Kono keeki o tabenaidekudasai.{'\n'}
        ~ Tolong jangan makan kue ini.
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

export default Negatif2;
