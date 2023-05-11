import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Pola2 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>1. Penggunaan もう atau mou</Text>
      <Text style={styles.text}>
        "Mou" dalam bahasa Jepang (Kanji: もう, Hiragana: もう) dapat memiliki beberapa arti, tergantung pada konteksnya.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Berikut adalah beberapa arti umum dari kata "mou" dalam bahasa Jepang:{'\n'}
      </Text>
        1. Lagi/tidak lagi: "mou ichido" (sekali lagi), "mou nai" (tidak lagi), "mou sukoshi" (sedikit lagi){'\n'}
        2. Sudah: "mou juubun" (sudah cukup), "mou daijoubu" (sudah baik-baik saja), "mou shiranai" (sudah tidak tahu){'\n'}
        3. Lain kali: "mou ichido" (lain kali), "mou chotto" (lain waktu){'\n'}
        4. Seperti/sepertinya: "mou" (seperti) digunakan dalam bahasa sehari-hari untuk menunjukkan spekulasi atau perasaan.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.title}>
        2. Penggunaan か。。。か atau Ka...ka{'\n'}
      </Text>
        Pola kalimat ini digunakan untuk menanyakan sesuatu pada dua pilihan.
      </Text>
      <Text style={styles.text}>
       <Text style={{fontWeight: 'bold'}}>Pola kalimat{'\n'}</Text>
        - Subjek, predikat か + predikat か{'\n'}{'\n'}
        Penjelasan :{'\n'}
        - か dalam pola kalimat ini bisa diartikan ‘atau’.{'\n'}
        - Subjek sendiri bersifat opsional, boleh ada boleh tidak.{'\n'}
        - Subjek dalam pola kalimat ini bisa diisi dengan kata benda apapun.{'\n'}
        - Predikat dalam pola kalimat ini bisa diisi kata benda, kata sifat, maupun kata kerja.{'\n'}{'\n'}
        <Text style={{fontWeight: 'bold'}}>Contoh kalimat{'\n'}</Text>
        彼は上手ですか、下手ですか{'\n'}
        – Kare wa jouzu desuka, heta desuka{'\n'}
        – Apakah dia pintar atau bodoh ?
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

export default Pola2;
