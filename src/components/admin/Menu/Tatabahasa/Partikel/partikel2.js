import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Partikel2 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>2. Pengunaan Partikel を atau yang dibaca (O)</Text>
      <Text style={styles.text}>
        Walaupun ditulis dengan hiragana wo, namun tetap dibaca o (を) jika digunakan sebagai partikel dalam kalimat. Fungsi yang paling umum dan paling dasar dari partikel o (を) ini adalah sebagai penanda objek. Dan partikel o (を) ini memiliki beberapa arti khusus diantaranya : melewati / mengelilingi, dan mengarungi yakni tergantung dari konsep kalimat yang digunakan.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        - Objek + を + kata kerja
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Penggunaan{'\n'}
      </Text>
        - 本を読みます.{'\n'}
        - Hon o yomimasu.{'\n'}
        - Membaca buku.
      </Text>
      <Text style={styles.title}>3. Pengunaan Partikel で atau (De)</Text>
      <Text style={styles.text}>
        Partikel de dalam bahasa Jepang memiliki banyak fungsi, partikel ini bisa berarti di, dengan, karena, & dan. Semua itu tergantung konsep kalimat yang digunakan. Jika kalimat menyatakan tempat maka bisa disimpulkan Partikel de (で) dalam kalimat tersebut berarti “di”, jika dalam kalimat sebab akibat berarti bisa diartikan “karena”, dan sebagainya.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        - Benda + Partikel de（で） + Kata Kerja{'\n'}
        - Tempat + Partikel de（で） + Kata Kerja
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Penggunaan{'\n'}
      </Text>
        - 私はご飯を食べる時箸で使います.{'\n'}
        - Watashi wa gohan taberu toki hashi de tsukaimasu.{'\n'}
        - Ketika saya makan nasim saya menggunakan sumpit.
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

export default Partikel2;
