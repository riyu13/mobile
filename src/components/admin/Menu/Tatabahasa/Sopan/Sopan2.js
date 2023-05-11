import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Sopan2 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>3. Penggunaan kata kerja - tai(たい)</Text>
      <Text style={styles.text}>
       Penggunaan kata kerja berakhiran tai(たい) adalah pengguanaan dimana ketika percakapan seseorang ingin mengungkapkan suatu keinginan.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
        Kata kerja(masu) + tai{'\n'}
        - 行きます : 行きたい{'\n'}
        - 食べます : 食べたい{'\n'}
        - 勉強します : 勉強したい{'\n'}
        - 見ます : 見たい
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh kalimat{'\n'}
      </Text>
        - 毎日私は学校へ行きたいです{'\n'}
        - Mainichi watashi wa gakkou e ikitai desu{'\n'}
        - Setiap hari aku ingin pergi ke sekolah.
      </Text>
      <Text style={styles.title}>4. Penggunaan katak kerja + なさい(nasai)</Text>
      <Text style={styles.text}>
       Kata kerja yang diimbuhkan dengan なさい akan digunakan sebagai berubah menjadi kata perintah, dan memiliki arti imbuhan (lah).
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola kalimat{'\n'}
      </Text>
        - Kata kerja + （ばさい）nasai{'\n'}
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh kalimat{'\n'}
      </Text>
        - このラメンを食べなさい。{'\n'}
        - Kono ramen wo tabenasai.{'\n'}
        - Makanlah ramen ini.
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

export default Sopan2;
