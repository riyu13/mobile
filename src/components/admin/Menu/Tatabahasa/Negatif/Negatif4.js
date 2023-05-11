import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Negatif4 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>5. Kata kerja + ~なければなりません</Text>
      <Text style={styles.text}>
       "Nakereba narimasen" (なければなりません) adalah frasa dalam bahasa Jepang yang berarti "harus" atau "wajib dilakukan". Frasa ini digunakan untuk menunjukkan bahwa ada tindakan atau kewajiban tertentu yang harus dilakukan, dan tidak melakukan tindakan tersebut akan menghasilkan konsekuensi yang tidak diinginkan.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
       - Kata kerja + ~なければなりません
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh kalimat{'\n'}
      </Text>
        - お金があると、仕事をしなければなりません。{'\n'}
        - Okane ga aruto, shigoto o shinakerebanarimasen.{'\n'}
        - Kalau ingin punya uang, harus bekerja.
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

export default Negatif4;
