import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Partikel5 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>8. Partikel の atau No</Text>
      <Text style={styles.text}>
        Digunakan untuk memisahkan dua kata benda, dengan kata lain jika terdapat dua kata benda maka partikel No “の” ini akan diletakkan diantara kedua kata benda tersebut dengan fungsi :{'\n'}
        1. Sebagai penanda kepemilikan{'\n'}
        2. Sebagai penanda ‘buatan’ atau tempat suatu barang berasal.{'\n'}
        3. KB pertama menerangkan KB berikutnya.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        - Subjek + の + kata benda.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Penggunaan{'\n'}
      </Text>
        - この物は私の物です.{'\n'}
        - Kono mono wa watashi no mono desu.{'\n'}
        - Benda ini adalah benda milik saya.
      </Text>
      <Text style={styles.title}>9. Partikel など atau Nado</Text>
      <Text style={styles.text}>
        Partikel Nado など dalam bahasa Jepang berarti ‘dan lain-lain’ atau ‘dan sebagainya’, partikel ini sering disertai dengan partikel ‘や’ yang berarti ‘dan’.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        - KB1, KB2, … + など{'\n'}
        - KB1 + や + KB2 + やなど
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh Penggunaan{'\n'}
      </Text>
        - 動物園に猿や熊や馬やなどがいます.{'\n'}
        - Doubutsuen ni saru ya kuma ya uma ya nado ga imasu.{'\n'}
        - Di kebut binatang ada monyet, beruang, kuda, dan lainnya.
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

export default Partikel5;
