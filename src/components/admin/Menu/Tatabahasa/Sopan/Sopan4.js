import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Sopan4 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>7. ~やすい atau yasui</Text>
      <Text style={styles.text}>
       Konstruksi dalam bahasa Jepang yang digunakan untuk mengungkapkan kemudahan atau kecenderungan untuk melakukan tindakan tertentu.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
      - Kata kerja + ~やすい
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh kalimat{'\n'}
      </Text>
        - 日本語は勉強しやすいです。{'\n'}
        - Nihongo wa benkyou shi yasui desu.{'\n'}
        - Bahasa Jepang mudah dipelajari.
      </Text>
      <Text style={styles.title}>8. ~にくい atau nikui</Text>
      <Text style={styles.text}>
       Konstruksi dalam bahasa Jepang yang digunakan untuk mengungkapkan kesulitan atau keengganan dalam melakukan tindakan tertentu.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola kalimat{'\n'}
      </Text>
        - Kata kerja + ~にくい
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh kalimat{'\n'}
      </Text>
        - 数学は勉強が苦手で、勉強がとても苦手です。{'\n'}
        - Suu-gaku wa benkyou ga nigate de, benkyou ga totemo nikui desu.{'\n'}
        - Saya tidak pandai dalam matematika dan sulit untuk belajar.
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

export default Sopan4;
