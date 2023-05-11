import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Negatif1 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>1. Bentuk negatif ～ない atau ~Nai</Text>
      <Text style={styles.text}>
       Adalah perubahan bentuk kata kerja berargumen negatif dalam artian tidak melakukan kegiatan tersebut.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        1. Kata kerja kelompok 1{'\n'}
      </Text>
        Untuk kata kerja kelompok 1, cara mengubahnya dengan mengubah huruf -u pada kata kerja menjadi -anai.{'\n'}
        Contoh:{'\n'}
        - 行く (iku : pergi) : 行かない (ikanai :tidak pergi){'\n'}
        - 買う (kau : membeli) : 買わない (kawanai : tidak membeli)
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        2. Kata kerja kelompok 2{'\n'}
      </Text>
        Untuk kata kerja golongan 2, cara mengubahnya dengan mengubah akhiran -ru menjadi -nai.{'\n'}
        Contoh:{'\n'}
        - 見る (miru : melihat ) : 見ない (minai : tidak melihat){'\n'}
        - 着る (kiru : memakai) : 着ない (kinai : tidak memakai)
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        3. Kata kerja kelompok 3{'\n'}
      </Text>
        Untuk kata kerja golongan 3 cukup mudah karena hanya terdiri dari 2 kata.{'\n'}
        Contoh:{'\n'}
        - 来る (kuru : datang) : 来ない (konai : tidak datang){'\n'}
        - する (suru : melakukan) : しない (shinai : tidak melakukan)
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

export default Negatif1;
