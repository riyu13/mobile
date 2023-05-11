import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Sopan3 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>5. Penggunaan (すぎる / なすぎる) atau Sugiru/Nasugiru</Text>
      <Text style={styles.text}>
       Pola ini digunakan ketika ingin mengungkapkan sesuatu yang berlebihan dalam bahasa Indonesia bisa seperti ‘terlalu besar’ , ‘terlalu kecil’ dan sebagainya. Biasanya terdapat kata ‘terlalu’ dalam ungkapannya.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola Kalimat{'\n'}
      </Text>
      - Kata kerja + ~すぎる
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh kalimat{'\n'}
      </Text>
        - 朝ごはんの時私はご飯を食べすぎる。{'\n'}
        - Asa gohan no toki watashi wa gohan o tabesugiru.{'\n'}
        - Ketika sarapan, saya terlalu banyak makan.
      </Text>
      <Text style={styles.title}>6. Penggunaan (~ながら) atau nagara</Text>
      <Text style={styles.text}>
       Pola (~ながら) digunakan ketika seseorang ingin mengungkapkan suatu kegiatan yang dilakukan bersama dan memiliki arti "sambil".
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola kalimat{'\n'}
      </Text>
        - Kata kerja + (~ながら)
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Contoh kalimat{'\n'}
      </Text>
        - 宿題をしながら音楽を聞きます。{'\n'}
        - Shukudai o shinagara ongaku o kikimasu.{'\n'}
        - Mengerjakan PR sambil mendengarkan musik.
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

export default Sopan3;
