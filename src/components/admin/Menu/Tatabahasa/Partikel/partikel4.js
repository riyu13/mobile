import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Partikel4 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>6. Partikel と atau to</Text>
      <Text style={styles.text}>
        Partikel ini digunakan sebagai kata sambung yang memilik arti : 'dan' & 'dengan'.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        - Kata benda + と + kata benda
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Penggunaan{'\n'}
      </Text>
        - 猫と犬がいる.{'\n'}
        - Neko to inu ga iru.{'\n'}
        - Saya punya kucing dan anjing.
      </Text>
      <Text style={styles.title}>7. Partikel が atau Ga</Text>
      <Text style={styles.text}>
        Partikel ini dapat digunakan untuk menerangkan keadaan dari suatu benda. Kata sifat yang menjadi objek dari pola kalimat ini akan diubah menjadi kata benda dengan menambahkan hiragana の. Partikel ga dapat digunakan untuk menegaskan suatu pernyataan atau kalimat. Dalam hal ini partikel ga bisa diartikan yang dalam bahasa Indonesia. Partikel ga ini juga digunakan untuk kata kerja intransitif, yaitu kata kerja yang tidak memerlukan objek.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        - Kata tempat + が + kata kerja + ?{'\n'}
        - Kata benda + が + kata sifat{'\n'}
        - Kata benda + が + kata kerja
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Penggunaan{'\n'}
      </Text>
        - 雪が降る.{'\n'}
        - Yuki ga furu.{'\n'}
        - Turun salju.
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

export default Partikel4;
