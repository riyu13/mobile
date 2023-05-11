import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Sopan1 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>1. Pengertian kata kerja bentuk 1 atau masu</Text>
      <Text style={styles.text}>
       "Bentuk kata kerja masu" adalah salah satu bentuk konjugasi kata kerja dalam bahasa Jepang yang digunakan untuk mengekspresikan tindakan yang sedang dilakukan dalam situasi sekarang, atau untuk mengekspresikan tindakan yang biasa atau berulang.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Beberapa contoh kata kerja{'\n'}
      </Text>
        - 食べます (tabemasu) - makan{'\n'}
        - 見ます (mimasu) - melihat{'\n'}
        - 行きます (ikimasu) - pergi{'\n'}
        - 来ます (kimasu) - datang{'\n'}
        - 聞きます (kikimasu) - mendengar/meminta informasi
      </Text>
      <Text style={styles.title}>2. Penggunaan ましょう、ませんか atau mashou, masenka</Text>
      <Text style={styles.text}>
       Kata mashou atau masenka biasanya digunakan ketika kita meminta tolong atau mengajak seseorang dengan bentuk sopan.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola kalimat{'\n'}
      </Text>
        - kata kerja + ましょうか/ませんか{'\n'}
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh kalimat{'\n'}
      </Text>
        - 一緒に食べましょう{'\n'}
        - Isshoni tabemashou{'\n'}
        - Mari kita makan.
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

export default Sopan1;
