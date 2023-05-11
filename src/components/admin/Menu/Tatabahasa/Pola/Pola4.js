import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Pola4 = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>5. の中で atau No naka de</Text>
      <Text style={styles.text}>
        "Nonakade" (のなかで) adalah frasa dalam bahasa Jepang yang artinya adalah "di dalam". Frasa ini biasanya digunakan untuk menunjukkan tempat atau situasi di mana suatu kegiatan atau peristiwa terjadi.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.text2}>
        Pola kalimat{'\n'}
      </Text>                
        - Benda + の中で~{'\n'}{'\n'}
    <Text style={styles.text2}>
        Contoh kalimat{'\n'}</Text>
        - 学生の中で、彼が一番ハンサムです.{'\n'}
        - Gakusei no naka de, kare ga ichiban hansamu desu.{'\n'}
        - Di antara murid-murid, dia yang paling tampan.
      </Text>
      <Text style={styles.text}>
      <Text style={styles.title}>
        6.Penggunaan と言います atau Toiimasu{'\n'}
      </Text>
        "Toiimasu" (と言います) adalah kata kerja dalam bahasa Jepang yang berarti "mengatakan" atau "mengucapkan". Kata kerja ini biasanya digunakan untuk mengenalkan diri atau orang lain, memberikan nama atau identitas, atau untuk mengutip atau merujuk pada pendapat atau pernyataan seseorang.
      </Text>
      <Text style={styles.text}>
       <Text style={{fontWeight: 'bold'}}>Pola kalimat{'\n'}</Text>
        - Kata Benda + と言います : disebut / bernama{'\n'}
        - Kalimat / Perkataan + と言います : berkata{'\n'}{'\n'}
        <Text style={{fontWeight: 'bold'}}>Contoh kalimat{'\n'}</Text>
        - 私は田中と言います。{'\n'}
        - Watashi wa Tanaka to iimasu.{'\n'}
        - Nama saya Tanaka.
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

export default Pola4;
